import React from 'react';
import { getUnit, getUnitSensors } from '../helpers/api.js';
import List from '../components/list.js';
import SensorsChart from '../components/SensorsChart.js';
import Environmental from '../components/environmental.js';

export default class UnitView extends React.Component {
    constructor() {
        super();
        this.state = {
            unit: undefined
        }
    }
    componentDidMount() {
        const { siteId, unitId } = this.props.match.params;
        return getUnit(Number(siteId), Number(unitId)).then(unit => {
            const promises = ['oxy_o2_percent', 'oxy_temp', 'depth'].map(sensor => {
                return getUnitSensors(unitId, sensor, `siteId eq ${siteId}`)
                    .then(response => ({
                        sensor,
                        data: response.result
                    }));
            })
            return Promise.all(promises).then(sensors => {
                unit.sensors = sensors;
                return unit;
            })
        }).then(unit => this.setState({ unit }));
    }
    render() {
        const { unit } = this.state;
        if (!unit) {
            return <div></div>;
        }
        const {
            unitName,
            unitId,
            siteId
        } = unit;
        const list = [
            { name: 'Name', value: unitName },
            { name: 'Id', value: unitId },
            { name: 'Site Id', value: siteId }
        ]
        const environmentalData = [];
        console.log(unit)

        return <div class="container">
            <h1>{unitName}</h1>
            <div class="row">
                <div class="col">
                    <h2>Unit data</h2>
                    <List list={list} />
                </div> 
            </div>
            <Environmental data={environmentalData} />
            <div class="row">
                <div class="col">
                    <h2>Historical data - last 24 hours</h2>  
                    <SensorsChart options={unit} />
                </div> 
            </div> 
        </div>
    }
}