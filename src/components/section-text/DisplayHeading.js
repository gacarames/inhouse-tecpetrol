import React, { Component } from 'react';

export default class DisplayHeading extends Component {


    render() {

        var styles = {
            fontSize: this.props.sizeText,
            lineHeight: `${parseInt(this.props.sizeText, 10) + 6}px`,
            textAlign: `${this.props.textAlign}`
        };

        return (
            <span className="display-heading" style={styles}>
                {this.props.contentHeading}
            </span>
        );
    }
}