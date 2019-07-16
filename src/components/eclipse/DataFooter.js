import React, { Component } from 'react';

import ItemData from './ItemData';

export default class DataFooter extends Component {

    render() {

        const list = [
            {
                id: 0,
                content: 'state-1',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '07 °C',
                hour: '16:30:35'
            },
            {
                id: 25,
                content: 'state-2',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '07 °C',
                hour: '16:58:19'

            },
            {
                id: 40,
                content: 'state-3',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '4 °C',
                hour: '17:41:31'
            },
            {
                id: 50,
                content: 'state-4',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '2 °C',
                hour: '17:42:40'
            },
            {
                id: 60,
                content: 'state-5',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '3 °C',
                hour: '17:43:48'
            },
            {
                id: 75,
                content: 'state-6',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '7 °C',
                hour: '18:02:45'
            },
            {
                id: 100,
                content: 'state-7',
                caption: 'Lorem ipsum dolor sit amet.',
                temperature: '7 °C',
                hour: '18:21:18'
            },
        ];

        const showItem = this.props.show

        const filterArray = list.filter(item => {
            return item.id === showItem;
        });

        const ItemsList = filterArray.map((item, i) => (
            <ItemData
                key={item.id}
                item={item}
                content={item.content}
                /* caption={`${item.caption} ${item.content}`} */
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