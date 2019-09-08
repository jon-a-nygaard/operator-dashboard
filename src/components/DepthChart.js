import React from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more.src.js';
import SolidGauge from 'highcharts/modules/solid-gauge.src.js';
import gaugeOptions from './GaugeOptions.js';

import Chart from './chart.js';

HighchartsMore(Highcharts);
SolidGauge(Highcharts);



export default class TemperatureChart extends React.Component {

    render() {
        const { value, name, measurement } = this.props.options;
        const options = Object.assign({}, gaugeOptions, {
            yAxis: {
                min: 0,
                max: 100,
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