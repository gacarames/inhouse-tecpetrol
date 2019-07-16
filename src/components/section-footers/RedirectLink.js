import React, { Component } from 'react';

export default class RedirectLink extends Component {

    render() {
        var styles = {
            position: this.props.position
        };

        return (
            <a
                style={styles}
                className={`footer-mega-button ${this.props.position}`}
                href={this.props.link}
                target="_black"
            >
                {this.props.content}
            </a>
        );
    }
}