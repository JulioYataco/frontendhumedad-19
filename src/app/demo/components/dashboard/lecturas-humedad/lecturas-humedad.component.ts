//import { EChartsOption } from './../../../../../../node_modules/echarts/types/src/export/option.d';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
//Importaciones modular de ECharts
import * as echarts from 'echarts';
import { LineChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent, VisualMapComponent, ToolboxComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';


echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  ToolboxComponent,
  CanvasRenderer
])

@Component({
  selector: 'app-lecturas-humedad',
  imports: [NgxEchartsModule],
  templateUrl: './lecturas-humedad.component.html',
  styleUrl: './lecturas-humedad.component.scss'
})
export class LecturasHumedadComponent implements AfterViewInit{ 
  
  private chart!: echarts.ECharts;
  private ROOT_PATH = 'https://echarts.apache.org/examples';

  constructor(private http: HttpClient) {}

  chartOption: echarts.EChartsOption = {}; // Opciones del gráfico

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('main')!;
    this.chart = echarts.init(chartDom);

    this.http.get<any>(`${this.ROOT_PATH}/data/asset/data/aqi-beijing.json`).subscribe(data => {
      this.chartOption = {
        title: { text: 'Lecturas Nivel 1', left: '1%' },
        tooltip: { trigger: 'axis' },
        grid: { left: '5%', right: '15%', bottom: '10%' },
        xAxis: {
          type: 'category',
          data: data.map((item: any) => item[0]) // Fechas
        },
        yAxis: { type: 'value' },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            { gt: 0, lte: 50, color: '#93CE07' },   // Verde (bueno)
            { gt: 50, lte: 100, color: '#FBDB0F' }, // Amarillo (moderado)
            { gt: 100, lte: 150, color: '#FC7D02' }, // Naranja (No saludable)
            { gt: 150, lte: 200, color: '#FD0100' }, // Rojo (peligroso)
            { gt: 200, lte: 250, color: '#AA069F' }, // Púrpura (muy peligroso)
            { gt: 250, color: '#AC3B2A' } // Marrón (crítico)
          ],
          outOfRange: { color: '#999' }
        },
        series: [
          {
            name: 'Nivel 1',
            type: 'line',
            data: data.map((item: any) => item[1]), // Valores AQI
            markLine: {
              silent: true,
              lineStyle: { color: '#333' },
              data: [{ yAxis: 20 }, { yAxis: 40 }, { yAxis: 60 }, { yAxis: 80 }, { yAxis: 100 }]
            }
          }
        ]
      };
      this.chart.setOption(this.chartOption);
    });
  }
}