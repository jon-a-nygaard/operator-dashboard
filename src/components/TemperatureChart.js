import React from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more.src.js';
import SolidGauge from 'highcharts/modules/solid-gauge.src.js';
import Chart from './Chart.js';
import gaugeOptions from './GaugeOptions.js';

HighchartsMore(Highcharts);
SolidGauge(Highcharts);

export default class TemperatureChart extends React.Component {

    render() {
        const { value, name, measurement } = this.props.options;
        const options = Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: -30,
                max: 60,
                title: {
                    text: name
                }
            },
            series: [{
                name: name,
                data: [value],
                dataLabels: {
                    format: `{y}${measurement}`
                },
                tooltip: {
                    valueSuffix: ` ${measurement}`
                }
            }]
        
        });
        return <Chart Highcharts={Highcharts} options={options}/>
    }
}