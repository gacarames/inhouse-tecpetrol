import React, { Component } from 'react';

export default class Blockquote extends Component {

    render() {

        return (
            <p className="blockquote">{this.props.content}
                <span className="cite">{this.props.cite}</span>
            </p>
        );
    }
}