import React, { Component } from 'react';

export default class FooterSmall extends Component {

    render() {

        return (

            <section className="footer-small-section">
                <div className="wrapper-footer-small container-wide-section">
                    <div className="footer-small">
                        <div className="footer-small-item media">
                            <img className="footer-small-img" src={this.props.image} alt=""></img>
                        </div>
                        <div className="footer-small-item text">
                            <span className="footer-small-label">{this.props.label}</span>
                            <a className="footer-small-link-recommended" href={this.props.link}>
                                <h1 className="footer-small-recommended">{this.props.content}</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}