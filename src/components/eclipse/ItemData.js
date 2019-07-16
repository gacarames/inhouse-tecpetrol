import React, { Component } from 'react';

export default class ItemData extends Component {

    render() {

        return (
            <div className="item-data">

                {/* <div className="full-section">
                    <span className="caption-data">
                        {this.props.caption}
                    </span>
                </div> */}

                <div className="half-section">

                    <span className="hour-data">{this.props.hour}</span>

                    <span className="temp-data">{this.props.temperature}</span>
                </div>


            </div >
        )
    }
}