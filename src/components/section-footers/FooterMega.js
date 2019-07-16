import React, { Component } from 'react';

export default class FooterMega extends Component {

    render() {

        var background = {
            backgroundImage: 'url(' + this.props.parallax + ')',
        };

        return (
            <section className="footer-mega-section">
                <div className="parallax-footer" style={background}></div>
                <div className="wrapper-footer-mega container-section">
                    <div className="footer-mega">
                        <img className="footer-mega-img" src={this.props.image} alt=""></img>
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}