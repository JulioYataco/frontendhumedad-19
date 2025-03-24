import { Component, inject, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { LecturahumedadService } from 'src/app/core/services/graficos/lecturahumedad/lecturahumedad.service';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ColorPickerModule } from 'primeng/colorpicker';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { Knob } from 'primeng/knob';
import { BadgeModule } from 'primeng/badge';
import { RangoGuiasService } from 'src/app/core/services/entidades/rango-guias/rango-guias.service';
import { IRangoGuias } from 'src/app/core/models/irango-guias';
import { ConfirmationService, MessageService } from 'primeng/api';
// import { PrimeFlexModule } from 'primeflex';
// import { PrimeFlexModule } from 'primeflex'; // Para estilos de PrimeFlex

//import { CommonModule } from '@angular/common';
//import 'echarts/theme/dark'; // Importa un tema
echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart]);

@Component({
  selector: 'app-lecturas-humedad',
  imports: [SHARED_FORMULARIOS_IMPORTS,CardModule,BadgeModule, Knob, RippleModule, InputNumberModule, ColorPickerModule, CalendarModule, NgxEchartsDirective, ButtonModule, DropdownModule, MenubarModule, InputGroupModule, ToggleButtonModule],
  templateUrl: './lecturas-humedad.component.html',
  styleUrl: './lecturas-humedad.component.scss',
  providers: [
    provideEchartsCore({ echarts })
  ]
})
export class LecturasHumedadComponent implements OnInit { 

  configuraciones : any[] = []; //Lista de configuracion_procesadores
  seleccionableConfigId: number = 1; 
  fechaInicio: string = '';
  fechaFin: string = '';
  showTemperaturaData: boolean = false;
  showHumedadData: boolean = true;

  displayModal: boolean = false; // Controla la visibilidad del modal
  //promedios
  promedioHumedad: number = 0;
  promedioTemperatura: number = 0;
  //Detalles de configuración
  detallesConfig: any;

  rangosGuiasConfig: any[] = [];

  // Array de líneas de referencia
  referenceLines: { yAxis: number; color: string; type: string }[] = [];

  constructor(private lecturahumedadService: LecturahumedadService, private rangoGuiaService: RangoGuiasService) { }
  // Valores temporales para la nueva línea
  lte: number = 10;
  color: string = '#FF0000';
  name: string = '';
  //Para lineas guias

  protected confirmationService = inject(ConfirmationService)
  protected messageService = inject(MessageService);
  selectedLineType: string = '';
  entidad: Partial<IRangoGuias> = {}; //Usamos partial para decir que la entidad no esta obligada a tener todas sus propiedades
  entidadcompleta!: IRangoGuias ;

  lineTypes = [
    { label: 'Línea Sólida', value: 'solid' },
    { label: 'Línea Punteada', value: 'dashed' },
    { label: 'Línea Discontinua', value: 'dotted' }
  ];

  CargarDatosModal(entidad: IRangoGuias) {
    this.entidad = { ...entidad };
    console.log("datos a editas:", entidad);
  }
  //Se usa para cuando se agrege o actualice una linea, y se elija otro color este actualiza su valor
  actualizarColor(event: any) {
    this.entidad.color = event.value; // Captura el color seleccionado
    console.log('Color actualizado:', this.entidad.color);
  }

  guardarConfiguracion() {
    //Indicamos que el valor seleccionable es igual al atributo configuracion_procesador
    this.entidad.configuracion_procesador = this.seleccionableConfigId;
    console.log('Entidad antes de enviar:', this.entidad); // 🔍 Verifica en consola
    
    if(this.entidad?.id){
      this.confirmationService.confirm({
        message: '¿Estas seguro de actualizar este registro?',
        header: 'Confirmación de Actualización',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //Actualizar
          this.rangoGuiaService.update(this.entidad.id, this.entidad).subscribe({
            next: (data) => {
              console.log('actualizado de lineas:',data)
              this.obtenerRangosGuiasConfig(this.seleccionableConfigId);
              this.messageService.add({ severity: 'success', summary: 'Editado', detail: 'Registro editado correctamente'});
            },
            error: err => console.error('Error al actualizar:', err)
          });
        }
      })
    } else {
      this.confirmationService.confirm({
        message: '¿Estas seguro de agregar este nuevo registro?',
        header: 'Confirmación de Nuevo Registro',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.rangoGuiaService.create(this.entidad).subscribe({
            next: (data) => {
              console.log('Linea Agregado:', data)
              this.obtenerRangosGuiasConfig(this.seleccionableConfigId);
              this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado correctamente'});
            },
            error: err => console.error('Error al agregar rangos:', err)
          });
        }
      })
    }
  }

  eliminar(id: number){
    this.confirmationService.confirm({
      message: '¿Estas seguro de eliminar este registro?',
      header: 'Confirmación Eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.rangoGuiaService.delete(id).subscribe(() => {
          this.obtenerRangosGuiasConfig(this.seleccionableConfigId);
          this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Registro Eliminado correctamente'});
        });
      },
      reject: () => {
        console.log('Eliminación cancelada');
      }
    })
  }

  //inicia cargando los ids de configuracion en el select
  ngOnInit(): void {
    this.cargarConfiguraciones();

    if (this.seleccionableConfigId) {
      this.RefrescarDatos(this.seleccionableConfigId);
    }
  }

  CerrarModalRefrescarTodo(){
    if (this.seleccionableConfigId) {
      this.RefrescarDatos(this.seleccionableConfigId)
    }
  }

  RefrescarDatos(id: number) {
    this.cargarLecturasHumedad(id, this.fechaInicio, this.fechaFin);
    this.cargaPromedioLecturas(id, this.fechaInicio, this.fechaFin);
    this.obtenerDetallesConfig(id);
    this.obtenerRangosGuiasConfig(id);
  }

  //Carga las configuraciones en el select
  cargarConfiguraciones(): void {
    this.lecturahumedadService.configuracionProcesadores().subscribe(
      (data) => {
        this.configuraciones = data; //Asignamos la lista de configuraciones
      },
      (error) => {
        console.error("error al obtener las configuraciones", error);
      }
    );
  }

  //Al presionar uno de los elemenntos del select, carga las lecturas y le pasa el id del la conffiguracion seleccionada
  ConfiguracionesChange(): void {
    if (this. seleccionableConfigId) {
      console.log('Selected Procesador ID:', this.seleccionableConfigId);
      this.RefrescarDatos(this.seleccionableConfigId);
    }
  }

  cargarLecturasHumedad(configuracionid: any, fechainicio: string, fechafin: string): void {
    this.lecturahumedadService.listaLecturasHumedad(configuracionid, fechainicio, fechafin).subscribe(
      (data) => {
        console.log('datos sensor:', data);
        this.procesarLecturas(data);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  cargaPromedioLecturas(configuracionid: any, fechainicio: string, fechafin: string): void {
    this.lecturahumedadService.promedioHumedadTemperatura(configuracionid, fechainicio, fechafin).subscribe(
      (data) => {
        console.log('promedio de lecturas:', data);
        this.promedioHumedad = data.promedio_humedad;
        this.promedioTemperatura = data.promedio_temperatura;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    )
  }

  obtenerDetallesConfig(configuracionId: number): void {
    this.lecturahumedadService.detallesConfiguraciones(configuracionId).subscribe(
      (data) => {
        this.detallesConfig = data;
        console.log('detales de config:', this.detallesConfig);
      }
    )
  }

  obtenerRangosGuiasConfig(configuracionId: number): void {
    this.lecturahumedadService.RangoGuiasConfiguraciones(configuracionId).subscribe(
      (data) => {
        this.rangosGuiasConfig = data;
        console.log('rangos guias de config:', this.rangosGuiasConfig);
      }
    )
  }
  
  loadDataWithDates(): void {
    if (this. seleccionableConfigId !== null) {
      console.log('Id seleccionado:', this. seleccionableConfigId);
      console.log('fecha inicio:', this.fechaInicio);
      console.log('fecha final:', this.fechaFin);
      this.lecturahumedadService.listaLecturasHumedad(this. seleccionableConfigId, this.fechaInicio, this.fechaFin).subscribe(
        (data) => {
          console.log('datos sensor con filtro:', data);
          this.procesarLecturas(data);
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
    }
  }

  procesarLecturas(data: any): void {
    const echarts = require('echarts');
    const chartDom = document.getElementById('main')!;
    const mychart = echarts.init(chartDom); //'dark'
    
    const fecha_hora = data.fecha_hora;
    const humedadSeries = data.humedad;
    const temperaturaSeries = data.temperatura;

    // this.showHumedadData = true;
    // this.showTemperaturaData = false;

    console.log(temperaturaSeries);

    //Crear las series para el grafico
    const series = [];
    //const margin = 5; // Margen adicional
    let minValue = Infinity;
    let maxValue = -Infinity;

    if (this.showTemperaturaData) {
      this.showTemperaturaData = true;
      this.showHumedadData = false;
      for (let i = 0; i < 5; i++) {
        const data = temperaturaSeries[i];
      
        // Calcular el mínimo y máximo de los datos actuales
        //const currentMin = Math.min(...data);
        //const currentMax = Math.max(...data);
        
        // Actualizar el mínimo y máximo global
        // if (currentMin < minValue) {
        //   minValue = currentMin;
        // }
        // if (currentMax > maxValue) {
        //   maxValue = currentMax;
        // }
        series.push({
          name:`Nivel Temperatura ${i + 1}`,
          type: 'line',
          data: temperaturaSeries[i],
          markLine: {
            silent: false,
            animation: true,
            data: this.generarMarkLines(),
            
          }
        });
      }
    }

    if (this.showHumedadData) {
      this.showHumedadData = true;
      this.showTemperaturaData = false;
      for (let i = 0; i < 5; i++) {

        const data = humedadSeries[i];
      
        // Calcular el mínimo y máximo de los datos actuales
        const currentMin = Math.min(...data);
        const currentMax = Math.max(...data);

        // Actualizar el mínimo y máximo global
        if (currentMin < minValue) {
          minValue = currentMin;
        }
        if (currentMax > maxValue) {
          maxValue = currentMax;
        }

        series.push({
          name:`Nivel Humedad ${i + 1}`,
          type: 'line',
          data: humedadSeries[i],
          markLine: {
            silent: false,
            data: this.generarMarkLines(),
            animation: true,
          }
        });
      }
    }
    console.log(series);
    
    const option = {
      //backgroundColor: '#232526', //roundColor: '#0f375f',
      // title: {
      //   text: 'Gráfico', //Titulo del grafico
      //   left: '1%', //Esto es para aplicar negrita
      //   // textStyle: {
      //   //   color: '#ccc'
      //   // }
      // },
      tooltip: {
        trigger: 'axis' //Linea de guia vertical al cursar el grafico (simplifica la visualización de datos ya que no tienes que cursar al punto especifico, sino que es más dinamico)
      },
      grid: {
        // left: '5%',
        // right: '15%',
        bottom: '15%'
      },
      legend: {
        data: series.map((s) => s.name), //Nombre de las series para las leyendas
        left: '10%'
      },
      xAxis: {
        type: 'category',
        data: fecha_hora,
        //splitLine: { show: true }, //Con eso se marcan lineas de forma vertical
        // textStyle: {
        //   color: '#ccc'
        // }
      },
      yAxis: {},
      toolbox: { //Esto funciona para habilitar opciones interactivas en el grafico
        right: 10, //Posiciona al lado izquierdo las opciones a habilitar
        feature: { //Opciones
          dataZoom: { //Para poder realizar zoom al grafico
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          restore: {}, //Restaurar el grafico a su posición inicial
          saveAsImage: {} //Habilita el la exportación del grafico en formato png
        },
        // textStyle: {
        //   color: '#ccc'
        // }
      },
      dataZoom: [ //Configuracion adicional de zoom
        {
          startValue: '2025-01-30 12:00:17' //Valor por el cual iniciará mostrando por defecto
        },
        {
          type: 'inside' //permite deslizarnos/navegación por el grafico
        }
      ],
      // visualMap: {
      //   top: 50,
      //   right: 10,
      //   pieces: this.rangosGuiasConfig
      // },
      // visualMap: {  //Esto le agrega su viñeta
      //   top: 50,
      //   right: 10,
      //   pieces: [
      //     //Verde #93CE07 //Amarilla #FBDB0F //Naranja #FC7D02
      //     //Morado #AA069F //Marron #AC3B2A  //Rojo #FD0100 
      //     {
      //       gt: 20,
      //       lte: 24,
      //       color: '#FC7D02' // #FC7D02
      //     },
      //     {
      //       gt: 24,
      //       lte: 25,
      //       color: '#93CE07' // #93CE07
      //     },
      //     {
      //       gt: 25,
      //       lte: 29,
      //       color: '#FD0100' //Rojo #FD0100
      //     }
      //   ],
      //   outOfRange: {
      //     color: '#999' //color #999
      //   }
      // },
      series: series,
    };
    mychart.setOption(option);
  }

  showHumedad(): void {
    this.showHumedadData = true;
    this.showTemperaturaData = false;
    if (this. seleccionableConfigId !== null) {
      this.cargarLecturasHumedad(this.seleccionableConfigId, this.fechaInicio, this.fechaFin);
    }
  }

  showTemperatura(): void {
    this.showHumedadData = false;
    this.showTemperaturaData = true;
    if (this. seleccionableConfigId !== null) {
      this.cargarLecturasHumedad(this.seleccionableConfigId, this.fechaInicio, this.fechaFin);
    } 
  }

  //para generar el markline dinamicamente
  generarMarkLines(){
    return this.rangosGuiasConfig.filter(range => range.lte !== undefined)
    .map(range => ({
      name: range.name, 
      yAxis: parseFloat(range.lte), 
      label: {
        show: true,  // Mostrar el nombre en la gráfica
        formatter: range.name,  // Nombre visible en la línea
        position: "end" // Ubicación de la etiqueta
      },
      lineStyle: { color: range.color, type: range.type } }
    ));
  }
  
  abrirModal(){
    this.displayModal = true;
    this.entidad = {} //Limpia el formulario
  }

  cerrarModal(){
    this.displayModal = false;
    if (this. seleccionableConfigId !== null) {
      console.log('Selected Procesador ID:', this.seleccionableConfigId);
      this.cargarLecturasHumedad(this. seleccionableConfigId, this.fechaInicio, this.fechaFin);
    }
  }
}