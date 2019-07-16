import React, { Component } from 'react';

export default class ItemList extends Component {

    render() {
        return (
            <li
                className={`item-list`}
            >
                {/* <span className={`icon ${this.props.item.icon}`}></span> */}
                {this.props.item.content}
            </li>
        );
    }
}