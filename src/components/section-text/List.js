import React, { Component } from 'react';
import ItemList from './ItemList';

export default class List extends Component {

    render() {

        const itemsList = this.props.list.map((item, i) => (
            <ItemList key={item.id} item={item} />
        ));

        return (
            <div className="wrapper-table material-skin">

                <ul className={`list ${this.props.type}`}>
                    {itemsList}
                </ul>
                <div className="wrapper-image">
                    <img src={this.props.image} alt="list" />
                </div>
            </div>
        );
    }
}