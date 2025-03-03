import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SHARED_FORMULARIOS_IMPORTS } from 'src/app/shared/shared-imports';
import { LecturahumedadService } from 'src/app/core/services/graficos/lecturahumedad/lecturahumedad.service';
//import { CommonModule } from '@angular/common';
//import 'echarts/theme/dark'; // Importa un tema
echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart]);

@Component({
  selector: 'app-lecturas-humedad',
  standalone: true,
  imports: [SHARED_FORMULARIOS_IMPORTS, NgxEchartsDirective],
  templateUrl: './lecturas-humedad.component.html',
  styleUrl: './lecturas-humedad.component.scss',
  providers: [
    provideEchartsCore({ echarts })
  ]
})
export class LecturasHumedadComponent implements OnInit { 

  configuraciones : any[] = []; //Lista de configuracion_procesadores
  selecionableConfigId: number | null = null; 
  showTemperaturaData: boolean = true;
  showHumedadData: boolean = false;


  constructor(private lecturahumedadService: LecturahumedadService) { }
  
  ngOnInit(): void {
    this.cargarConfiguraciones();
  }

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

  ConfiguracionesChange(): void {
    if (this.selecionableConfigId !== null) {
      this.cargarLecturasHumedad(this.selecionableConfigId);
    }
  }

  cargarLecturasHumedad(configuracionId: any): void {
    this.lecturahumedadService.listaLecturasHumedad(configuracionId).subscribe(
      (data) => {
        console.log('datos sensor:', data);
        this.procesarLecturas(data);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  procesarLecturas(data: any): void {
    const echarts = require('echarts');
    const chartDom = document.getElementById('main')!;
    const mychart = echarts.init(chartDom, 'dark');
    
    const fecha_hora = data.fecha_hora;
    const humedadSeries = data.humedad;
    const temperaturaSeries = data.temperatura;

    console.log(temperaturaSeries);

    //Crear las series para el grafico
    const series = [];
    if (this.showTemperaturaData) {

      for (let i = 0; i < 5; i++) {
        series.push({
          name:`Nivel Temperatura ${i + 1}`,
          type: 'line',
          data: temperaturaSeries[i],
        });
      }
    }

    if (this.showHumedadData) {

      for (let i = 0; i < 5; i++) {
        series.push({
          name:`Nivel Humedad ${i + 1}`,
          type: 'line',
          data: humedadSeries[i],
        });
      }
    }
    console.log(series);
    const option = {
      title: {
        text: '', //Titulo del grafico
        left: '1%' //Esto es para aplicar negrita
      },
      tooltip: {
        trigger: 'axis' //Linea de guia vertical al cursar el grafico (simplifica la visualización de datos ya que no tienes que cursar al punto especifico, sino que es más dinamico)
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      legend: {
        data: series.map((s) => s.name) //Nombre de las series para las leyendas
      },
      xAxis: {
        type: 'category',
        data: fecha_hora,
      },
      yAxis: {
        type: 'value',
        min: 20,
        max: 30
      },
      toolbox: { //Esto funciona para habilitar opciones interactivas en el grafico
        right: 10, //Posiciona al lado izquierdo las opciones a habilitar
        feature: { //Opciones
          dataZoom: { //Para poder realizar zoom al grafico
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          restore: {}, //Restaurar el grafico a su posición inicial
          saveAsImage: {} //Habilita el la exportación del grafico en formato png
        }
      },
      dataZoom: [ //Configuracion adicional de zoom
        {
          startValue: '2025-01-30 12:00:17' //Valor por el cual iniciará mostrando por defecto
        },
        {
          type: 'inside' //permite deslizarnos/navegación por el grafico
        }
      ],
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
    if (this.selecionableConfigId !== null) {
      this.cargarLecturasHumedad(this.selecionableConfigId);
    }
  }
  showTemperatura(): void {
    this.showHumedadData = false;
    this.showTemperaturaData = true;
    if (this.selecionableConfigId !== null) {
      this.cargarLecturasHumedad(this.selecionableConfigId);
    }
  }
}

// data.forEach((entry) =>{
    //   console.log("Entry:", entry);

      // if (!entry || !entry.values) {
      //   console.error('Entrada inválida o values no está definido:', entry);
      //   return;
      // }

      // const valuesArray = Array.isArray(entry.values)
      // ? entry.values
      // : Object.values(entry.values);
      
      // if (!Array.isArray(valuesArray)) {
      //   console.log("values no es un array:", valuesArray);
      //   return;
      // }

      // timeStamps.push(entry.time);

      // const humedadValues = valuesArray
      //   .filter((v: any) => v.register % 2 !== 0) // Filtra humedad
      //   .map((v: any) => v.value);

      // const temperaturaValues = valuesArray
      //   .filter((v: any) => v.register % 2 === 0) // Filtra temperatura
      //   .map((v: any) => v.value);

      // Tomar solo el primer valor de cada array
      // humedadData.push(humedadValues[0] || 0); // Usa el primer valor o 0 si no hay datos
      // temperaturaData.push(temperaturaValues[0]/10 || 0);
      // temperaturaData2.push(temperaturaValues[1]/10 || 0);
      // temperaturaData3.push(temperaturaValues[2]/10 || 0);
      // temperaturaData4.push(temperaturaValues[3]/10 || 0);
      // temperaturaData5.push(temperaturaValues[4]/10 || 0);
//});

// console.log('Humedad Data:', humedadData); // Depuración
// console.log('Temperatura Data:', temperaturaData); // Depuración