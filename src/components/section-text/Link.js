import React, { Component } from 'react';

export default class Link extends Component {

    render() {

        return (
            <span className="link">
                <a href={this.props.link}>{this.props.content}</a>
            </span>

        );
    }
}