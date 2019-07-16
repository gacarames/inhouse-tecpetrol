import React, { Component } from 'react';

export default class Card extends Component {

    render() {

        return (

            <div className={this.props.type}>

                <div className="card-item">
                    <img className="card-img" src={this.props.image} alt={this.props.title}></img>
                </div>

                <div className="card-item text">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p>{this.props.content}</p>
                    {this.props.children}
                </div>
            </div>

        );
    }
}