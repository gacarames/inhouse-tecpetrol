import React, { Component } from 'react';

export default class Jumbotron extends Component {
    render() {

        var parallaxBg = {
            backgroundImage: `url(${this.props.parallax})`
        };

        return (
            <section className="jumbotron-section">
                <div className="parallax-jumbotron" style={parallaxBg}></div>
                <div className="wrapper-jumbotron container-section">
                    <div className="jumbotron">
                        <img className="jumbotron-img" src={this.props.image} alt=""></img>
                        <span className={"jumbotron-caption " + this.props.position}>
                            {this.props.caption}
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}