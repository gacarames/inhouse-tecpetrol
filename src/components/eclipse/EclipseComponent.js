import React, { Component } from 'react';


import StateHeader from './StateHeader';
import SliderBody from './SliderBody';
import DataFooter from './DataFooter';

/* import { Slider } from 'antd';
import 'antd/dist/antd.css'; */

import '../../css/eclipse.css';

export default class EclipseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: 0,
            itemShow: 0
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        let newStage = Number(e.target.id);
        this.setState({
            stage: newStage,
            itemShow: newStage
        });
    }

    changeStageFromSlider = (value) => {
        /* console.log(`SliderBoy cambio el valor de stage a ${value}`) */
        this.setState({
            stage: value,
            itemShow: value
        });
    }


    render() {

        console.log('Montaje.render')

        return (

            <div className="eclipse-container">

                <StateHeader
                    onClick={this.onClick}
                />

                <div className={`slide-wrapper stage-${this.state.stage}`}>
                    <SliderBody
                        position={this.state.stage}
                        changeStage={this.changeStageFromSlider}
                    />
                </div>


                <DataFooter
                    show={this.state.itemShow}
                />

            </div>

        )
    }
}