import React, { Component } from 'react';

export default class CardsRow extends Component {

    render() {

        return (
            <section className="card-section">
                <div className={`wrapper-card container-${this.props.container}-section ${this.props.type}`} >
                    {this.props.children}
                </div>
            </section>
        );
    }
}