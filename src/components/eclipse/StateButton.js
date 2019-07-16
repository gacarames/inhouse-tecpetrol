import React, { Component } from 'react';

export default class StateButton extends Component {

    onClick = (e) => {
        this.props.onClick(e);
    }

    render() {

        var styles = {
            backgroundImage: `url('${this.props.img}')`,
        };

        return (
            <button
                style={styles}
                className="state-button"
                id={this.props.id}
                onClick={this.onClick}
            >
                {this.props.content}
            </button >
        )
    }
}