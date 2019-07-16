import React, { Component } from 'react'

import { Slider } from 'antd';
import 'antd/dist/antd.css'

export default class SliderBody extends Component {

    render() {

        const marks = {
            0: '',
            25: '',
            40: '',
            50: '',
            60: '',
            75: '',
            100: ''
        };

        const position = this.props.position
        return (
            <div className="slider-body">
                <Slider
                    autoFocus={false}
                    value={position}
                    marks={marks}
                    step={null}
                    defaultValue={0}
                    tipFormatter={null}
                    onChange={this.props.changeStage}
                />
            </div>
        );
    }
}

