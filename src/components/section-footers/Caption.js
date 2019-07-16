import React, { Component } from 'react';

export default class Caption extends Component {

    render() {

        var lineText = {
            fontSize: `${this.props.sizeText}`,
            lineHeight: `${this.props.lineHeight}`,
            textAlign: `${this.props.textAlign}`
        };

        return (
            <div className={`footer-mega-caption ${this.props.position}`}>
                <p style={lineText}>{this.props.content}</p>
            </div>
        );
    }
}