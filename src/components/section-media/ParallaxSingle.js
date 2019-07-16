import React, { Component } from 'react';

export default class ParallaxSingle extends Component {
    render() {

        var background = {
            backgroundImage: `url(${this.props.image})`,
            minHeight: `${this.props.height}`

        };

        return (
            <section className="parallax-section">
                <div className="parallax-single" style={background}></div>
            </section>
        );
    }
}