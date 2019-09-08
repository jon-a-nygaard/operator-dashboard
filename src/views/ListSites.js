import React from 'react';
import { getSites, getSiteUnits } from '../helpers/api.js';
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

const addUnitsToSiteObject = site => units => {
    site.units = units;
    return site;
}

export default class ListSites extends React.Component {
    constructor() {
        super();
        this.state = {
            sites: [],
            isLoading: true
        };
        // return getSites().then(() => {
        //     console.log('done')
        // })
    }
    componentDidMount() {
        console.log('@componentDidMount')
        // Request available sites from api
        getSites().then(sites => {
            // Request all units
            const sitesPromises = sites.map(
                site => getSiteUnits(site.siteId)
                    .then(addUnitsToSiteObject(site))
            );
            Promise.all(sitesPromises).then(sitesWithUnits => {
                this.setState({
                    sites: sitesWithUnits,
                    isLoading: false
                })
            });
        });
    }
    render() {
        const { sites, isLoading } = this.state;
        if (isLoading) {
            return <LoadingComponent />
        }
        console.log(sites)
        const cards = sites.map(getSiteLayout);
        return (
            <div class="container">
                <h1>Available sites</h1>
                {cards}
            </div>
        );
    };
}
