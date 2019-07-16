import React, { Component } from 'react';

import StateButton from './StateButton';

export default class StateHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { bgScrollOpacity: "0" };
    }

    /* onClick = (e) => {
        alert(`Clickeado desde el boton hijo con id ${e.target.id}`);
    } */

    onClick = (e) => {
        this.props.onClick(e);
    }

    render() {
        const list = [
            {
                id: '0',
                content: '16:30'
            },
            {
                id: '25',
                content: 'null'
            },
            {
                id: '40',
                content: '17:41'
            },
            {
                id: '50',
                content: '17:42'
            },
            {
                id: '60',
                content: '17:43'
            },
            {
                id: '75',
                content: 'null'
            },
            {
                id: '100',
                content: '18:46'
            },
        ];

        const ButtonsList = list.map((item, i) => (
            <StateButton
                key={item.id}
                item={item}
                id={item.id}
                content={item.content}
                onClick={this.onClick}
            />
        ));

        return (
            <div className="state-header">
                {ButtonsList}
            </div>
        )
    }
}