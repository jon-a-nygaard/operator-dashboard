import React from 'react';
import { getUnitWithSensors } from '../helpers/api.js';
import ListComponent from '../components/ListComponent.js';
import SensorsChart from '../components/SensorsChart.js';
import EnvironmentalSection from '../components/EnvironmentalSection.js';
import LoadingComponent from '../components/LoadingComponent.js';

const mapKeyToName = {
    oxy_temp: "Temperature",
    oxy_o2_percent: 'Oxygen',
    depth: "Depth"
}

export default class UnitView extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        const { siteId, unitId } = this.props.match.params;
        // Get data from the web API
        return getUnitWithSensors(Number(siteId), Number(unitId))
            .then(unit => this.setState({ unit, isLoading: false }));
    }
    render() {
        const { unit, isLoading } = this.state;

        // Display loading spinner if data is not available
        if (isLoading) {
            return <LoadingComponent />
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
        const environmentalData = unit.sensors.reduce(
            (mapKeyToSensor, { sensor, data }) => {
                const { value, measurement, dateTime } = data[0];
                mapKeyToSensor[sensor] = {
                    name: mapKeyToName[sensor],
                    value,
                    measurement,
                    dateTime
                };
                return mapKeyToSensor;
            },
            {}
        );

        return <div class="container">
            <h1>Unit: {unitName}</h1>
            <div class="row">
                <div class="col">
                    <h2>Information</h2>
                    <ListComponent list={list} />
                </div> 
            </div>
            <EnvironmentalSection data={environmentalData} />
            <div class="row">
                <div class="col">
                    <h2>Sensor values last 24 hours</h2>  
                    <SensorsChart options={unit} />
                </div> 
            </div> 
        </div>
    }
}