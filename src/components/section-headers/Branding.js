import React, { Component } from 'react';

export default class Branding extends Component {

    render() {

        return (
            <div className="head-brand in-header">
                <span className="label-head-brand"><img className="inhouse-logo" src={require('../../assets/icons/logo-inhouse.svg')} alt="In House" /> para <img className="brand-logo" src={this.props.image} alt="Brand Logo" /></span>
                <span className="label-head-date">{this.props.date}</span>
            </div>

        );
    }
}