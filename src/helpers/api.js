const {
    REACT_APP_API_AUTHORIZATION_KEY,
    REACT_APP_API_DOMAIN,
    REACT_APP_API_OCP_APIM_SUBSCRIPTION_KEY
} = process.env;

const defaultOptions = {
    headers: {
        "Authorization": REACT_APP_API_AUTHORIZATION_KEY,
        "Ocp-Apim-Subscription-Key": REACT_APP_API_OCP_APIM_SUBSCRIPTION_KEY
    }
};

function fetchJSON(path, options) {
    return fetch(path, options).then(response => response.json());
}

/**
 * Get current environement parameters
 *
 * @param {string} filter
 *      Filter value with optional siteIds and unitIds.
 *      E.g siteIds eq 1114 and unitIds eq 27072,27073
 * @returns Returns a promise which resolves into an object.
 */
export function getEnvironment(filter) {
    const path = `${REACT_APP_API_DOMAIN}/v1/basic/environment?filter=${filter}`;
    return fetchJSON(path, defaultOptions);
}

/**
 * Get list of sites
 *
 * @returns Returns a promise which resolves into an array.
 */
export function getSites() {
    const path = `${REACT_APP_API_DOMAIN}/v1/organisation/sites`;
    return fetchJSON(path, defaultOptions);
}

/**
 * Get list fish cage for a specific site
 *
 * @param {string} siteId
 *      Site id to retrieve the cage list for
 * @returns A promise which resolves into an array.
 */
export function getSiteUnits(siteId) {
    const path = `${REACT_APP_API_DOMAIN}/v1/organisation/sites/${siteId}/units`;
    return fetchJSON(path, defaultOptions);
}

export function getUnit(siteId, unitId) {
    return getSiteUnits(siteId)
        .then(units => units.find(unit => unit.unitId === unitId));
}

/**
 * Get daily sensor data points
 *
 * @param {number} unitId
 *      Default value : 27072
 * @param {string} select
 *      Selected sensor type
 *      Available values : oxy_o2_percent, oxy_temp, depth
 * @param {string} filter
 *      Filter values: siteId must be included along with optional date range in unix timestamp
 *      E.q siteId eq 1114 and dateTime gt 1562104800 and dateTime lt 1562277600
 * @returns Returns a promise which resolves an object.
 */
export function getUnitSensors(unitId, select, filter) {
    const path = `${REACT_APP_API_DOMAIN}/v1/sensors/units/${unitId}?select=${select}&filter=${filter}`;
    return fetchJSON(path, defaultOptions);
}