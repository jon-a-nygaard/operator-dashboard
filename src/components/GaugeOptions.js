export default {

    chart: {
        type: 'solidgauge',
        height: 170
    },
    credits: {
        enabled: false
    },
    title: null,
    pane: {
        center: ['50%', '90%'],
        size: '150%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: 'transparent',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },
    tooltip: {
        enabled: false
    },
    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: 10
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 0,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};
