import React, { Component } from 'react';

import StateButton from './StateButton';

export default class StateHeader extends Component {

    onClick = (e) => {
        this.props.onClick(e);
    }

    render() {
        const list = [
            {
                id: '0',
                content: '16:30',
                img: 'https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/eclipse/eclips-icono-1.svg'
            },
            {
                id: '25',
                content: '17:00',
                img: 'https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/eclipse/eclips-icono-2.svg'
            },
            {
                id: '40',
                content: '17:41',
                img: 'https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/eclipse/eclips-icono-3.svg'
            },
            {
                id: '50',
                content: '17:42',
                img: 'https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/eclipse/eclips-icono-4.svg'
            },
            {
                id: '60',
                content: '17:43',
                img: 'https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/eclipse/eclips-icono-5.svg'
            },
            {
                id: '75',
                content: '18:00',
                img: 'https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/eclipse/eclips-icono-6.svg'
            },
            {
                id: '100',
                content: '18:46',
                img: 'https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/eclipse/eclips-icono-7.svg'
            },
        ];

        const ButtonsList = list.map((item, i) => (
            <StateButton
                key={item.id}
                item={item}
                id={item.id}
                img={item.img}
                /*  content={item.content} */
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