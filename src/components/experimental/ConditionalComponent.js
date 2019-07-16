import React, { Component } from 'react';

export default class ConditionalComponent extends Component {

    render() {

        /* const regex = /[^\n] +/; */
        /* const isFill = string.length > 0 && string.length !== undefined; */
        let stringContent = null;

        if (this.props.content) {
            stringContent = <h2>This is a {this.props.content} test.</h2>;
        }

        return (
            <div>
                {stringContent}
            </div>
        )
    }
}