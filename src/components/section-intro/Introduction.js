import React, { Component } from 'react';

export default class introduction extends Component {
    render() {
        return (
            <section className="introduction-text-section">
                <div className="wrapper-introduction container-small-section">
                    <div className="head-brand">
                        <span className="label-head-brand">
                            <img className="inhouse-logo" src={require('../../assets/icons/logo-inhouse.svg')}
                                alt="infobae InHouse" />
                            para
                            <img className="brand-logo" src={this.props.logo}
                                alt="" />
                        </span>

                        <span className="label-head-date">{this.props.date}</span>
                    </div>

                    <p className="block-text-blurb">{this.props.content}</p>
                </div>
            </section>
        );
    }
}