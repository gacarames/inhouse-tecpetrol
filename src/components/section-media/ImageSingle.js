import React, { Component } from 'react';

export default class SingleImage extends Component {
    render() {
        return (
            <section className="single-image">

                <div className={`wrapper-single-image container-${this.props.width}-section`}>

                    <figure>
                        <img
                            className="wide-image"
                            src={this.props.image}
                            alt={this.props.caption}
                        />

                        <figcaption>
                            <span className="wide-image-caption">                       {this.props.caption}
                            </span>
                        </figcaption>
                    </figure>

                </div>
            </section>
        );
    }
}