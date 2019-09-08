import React from 'react';
import Highcharts from 'highcharts/highstock.js';
import Chart from './chart.js';


const mapKeyToName = {
    oxy_temp: "Temperature",
    oxy_o2_percent: 'Oxygen',
    depth: "Depth"
}

const sortByX = (a, b) => {
    return a.x - b.x;
}

function getChartConfig(data) {
    const series = data.sensors.map(({ sensor, data }) => {
        const parsedData = data.map(({ dateTime, value }) => ({
            x: dateTime,
            y: value
        })).sort(sortByX);
        return {
            name: mapKeyToName[sensor],
            data: parsedData,
            tooltip: {
                valueSuffix: data[0].measurement
            }
        }
    })
    return {
        yAxis: [{

        }],
        series
    };
}

export default class StockChart extends React.Component {
    render() {
        const options = getChartConfig(this.props.options);
        return <Chart 
            Highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
        />
    }
}