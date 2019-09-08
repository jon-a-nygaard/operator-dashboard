import React from 'react';
import { getSitesWithUnits } from '../helpers/api.js';
import LoadingComponent from '../components/LoadingComponent.js';

function getSiteLayout(site) {
    const { siteId, siteName, units } = site;
    const unitElements = units.map(unit => {
        const unitUrl = `/unit/${siteId}/${unit.unitId}`
        return <div class="col-4 unit">
            {getUnitCard(unit, unitUrl)}
        </div>
    });
    return (
        <div>
            <div class="row">
                <div class="col">
                    <h2>{siteName}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12"><h3>Units</h3></div>
                {unitElements}
            </div>
        </div>
    );
}
function getUnitCard(unit, url) {
    const { unitName, unitId } = unit;
    return <div class="card">
        <div class="card-header">
            <h4 class="card-title">
                <a href={url}>{`${unitName} - ${unitId}`}</a>
            </h4>
        </div>
        <div class="card-body">
            <p>Add description here</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">List some data here</li>
        </ul>
    </div>
}

export default class ListSites extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }
    componentDidMount() {
        // Get data from the web API
        return getSitesWithUnits()
            .then(sites => { this.setState({ sites, isLoading: false }) });
    }
    render() {
        const { sites, isLoading } = this.state;

        // Display loading spinner if data is not available
        if (isLoading) {
            return <LoadingComponent />
        }

        const cards = sites.map(getSiteLayout);
        return (
            <div class="container">
                <h1>Available sites</h1>
                {cards}
            </div>
        );
    };
}
