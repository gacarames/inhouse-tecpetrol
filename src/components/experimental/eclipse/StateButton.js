import React, { Component } from 'react';

export default class StateButton extends Component {
    constructor(props) {
        super(props);

    }

    onClick = (e) => {
        this.props.onClick(e);
    }

    render() {

        return (
            <button
                className="state-button"
                id={this.props.id}
                onClick={this.onClick}
            >
                {this.props.content}
            </button >
        )
    }
}