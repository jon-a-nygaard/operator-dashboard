import React from 'react';
import TemperatureChart from './TemperatureChart.js';
import OxygenChart from './OxygenChart.js';
import DepthChart from './DepthChart.js';

export default class Environmental extends React.Component {
    render() {
        const {
            data: {
                depth,
                oxy_o2_percent,
                oxy_temp
            }
        } = this.props;
        return <div class="row">
            <div class="col-12">
                <h2>Last sensor values</h2>
            </div>
            <div class="col-4"><TemperatureChart options={oxy_temp} /></div>
            <div class="col-4"><OxygenChart options={oxy_o2_percent} /></div>
            <div class="col-4"><DepthChart options={depth} /></div>
        </div>
    }
}