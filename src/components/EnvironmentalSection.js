import React from 'react';
import TemperatureChart from './TemperatureChart.js';
import OxygenChart from './OxygenChart.js';
import DepthChart from './DepthChart.js';
import SensorCard from './SensorCard.js';

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
            <div class="col-4">
                <SensorCard options={oxy_temp}>
                    <TemperatureChart options={oxy_temp} />
                </SensorCard>
            </div>
            <div class="col-4">
                <SensorCard options={oxy_o2_percent}>
                    <OxygenChart options={oxy_o2_percent} />
                </SensorCard>
            </div>
            <div class="col-4">
                <SensorCard options={depth}>
                    <DepthChart options={depth} />
                </SensorCard>
            </div>
        </div>
    }
}