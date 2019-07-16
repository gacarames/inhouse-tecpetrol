import React, { Component } from 'react'

import { Slider, Switch } from 'antd';
import 'antd/dist/antd.css'

class Example extends Component {
    state = {
        disabled: false,
    };

    render() {

        const marks = {
            0: '16:30',
            25: 'null',
            40: '17:41',
            50: '17:42',
            60: '17:43',
            75: '17:43',
            100: {
                style: {
                    color: '#f50',
                },
                label: <strong>18:46</strong>,
            },
        };

        const { disabled } = this.state;

        return (
            <div className="slider-body">
                <Slider marks={marks} step={null} defaultValue={this.props.position} />
            </div>
        );
    }
}

export default Example