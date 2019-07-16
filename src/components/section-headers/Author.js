import React, { Component } from 'react';

export default class Author extends Component {

    render() {

        return (
            <div className="by-line">


                <img className="author-img" src={this.props.image} alt={this.props.author} />
                <span className="label-author-name">Por {this.props.author}</span>

            </div>
        );
    }
}