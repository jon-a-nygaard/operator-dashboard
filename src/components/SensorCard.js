
import React from 'react';
import ListComponent from './ListComponent.js';

export default class SensorCard extends React.Component {
    render() {
        const { 
            options: {
                name,
                dateTime,
                measurement,
                value
            }
        } = this.props;
        console.log(this.props, new Date(dateTime))
        const list = [
            { name: 'Date', value: (new Date(dateTime)).toString() },
            { name: 'Measurement', value: measurement },
            { name: 'Value', value: `${value} ${measurement}` }
        ]

        return <div class="card">
            <div class="card-header">
                {name}
            </div>
            <div class="card-body">
                {this.props.children}
            </div>
            <ListComponent list={list} />
        </div>
    }
}
