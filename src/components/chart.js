import React from 'react';
import Highcharts from 'highcharts';

export default class Chart extends React.Component {
    constructor() {
        super();
        this.container = React.createRef();
    }
    componentDidMount() {
        const { constructorType, options, Highcharts } = this.props;
        this.chart = Highcharts[constructorType](this.container.current, options);
    }
    static defaultProps = {
        constructorType: 'chart',
        Highcharts
    }
    render() {
        return <div ref={this.container}></div>;
    }
}