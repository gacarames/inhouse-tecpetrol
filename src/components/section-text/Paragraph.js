import React, { Component } from 'react';

export default class Paragraph extends Component {

    render() {

        var styles = {
            fontSize: this.props.sizeText,
            lineHeight: `${parseInt(this.props.sizeText, 10) + 6}px`,
            textAlign: `${this.props.textAlign}`
        };

        return (
            <p style={styles} className={this.props.type}>{this.props.content}</p>

        );
    }
}