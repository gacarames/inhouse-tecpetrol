import React, { Component } from 'react';

import ItemData from './ItemData';

export default class DataFooter extends Component {

    render() {

        const list = [
            {
                id: '1',
                content: 'estado 1',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '20 °C',
                hour: '16:30'
            },
            {
                id: '2',
                content: 'estado 2',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '20 °C',
                hour: 'null'

            },
            {
                id: '3',
                content: 'estado 3',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '20 °C',
                hour: '17:41'
            },
            {
                id: '4',
                content: 'estado 4',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '20 °C',
                hour: '17:42'
            },
            {
                id: '5',
                content: 'estado 5',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '20 °C',
                hour: '17:43'
            },
            {
                id: '6',
                content: 'estado 6',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '20 °C',
                hour: 'null'
            },
            {
                id: '7',
                content: 'estado 7',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '20 °C',
                hour: '19:46'
            },
        ];

        const ItemsList = list.map((item, i) => (
            <ItemData
                key={item.id}
                item={item}
                content={item.content}
                caption={item.caption}
                temperature={item.temperature}
                hour={item.hour}
            />
        ));

        return (
            <div
                className="data-footer"
            >
                {ItemsList}
            </div>
        )
    }
}