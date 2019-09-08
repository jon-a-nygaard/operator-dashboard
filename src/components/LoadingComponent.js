import React from 'react';

export default class LoadingComponent extends React.Component {
    render() {
        return <div class="container">
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    }
}