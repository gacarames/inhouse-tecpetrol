import React, { Component } from 'react';

export default class StrongTextFunction extends Component {

    render() {

        var fullStringArray = this.props.content.split(' ');
        var fragStringArray = this.props.strong.split(' ');

        const matchArray = fullStringArray.map(function (item) {
            if (~fragStringArray.indexOf(item)) {
                return <strong key={item}>{item}</strong>;
            } else {
                return item
            }
        });

        let formattedText = matchArray.reduce((prev, curr) => [prev, ' ', curr])

        return (
            <p className={this.props.type}>{formattedText}</p>
        );
    }
}