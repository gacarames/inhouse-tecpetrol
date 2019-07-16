import React, { Component } from 'react';


import StateHeader from './StateHeader';
/* import BodyDnD from './BodyDnD'; */
import SliderBody from './SliderBody';
import DataFooter from './DataFooter';

import '../../../css/eclipse.css';

export default class EclipseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 25,
            itemShow: 1
        };
    }

    onClick = (e) => {

        let newStage = Number(e.target.id);

        this.setState({
            stage: newStage
        });

        console.log(newStage)
    }

    componentDidMount() {
        console.log('Montaje.componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('Actualizacion.shouldComponentUpdate')

        if (nextState.stage === this.state.stage) {
            console.log('No cambio el Valor de estado')
            return false
        } else {
            console.log('Verdadero')
            return true
        }

        /* return true */
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Actualizacion.getSnapshotBeforeUpdate')
        return { oldStage: prevState.stage }
    }

    componentDidUpdate(nextProps, nextState, snapShot) {
        console.log('Actualizacion.componentDidUpdate')
        console.log(snapShot)
    }

    /* static getDerivedStateFromProps(props, state) {
        console.log('Method.Actualizacion.getDerivedStateFromProps')
    } */

    render() {

        console.log('Montaje.render')


        return (

            <div className="eclipse-container">

                <StateHeader
                    onClick={this.onClick}
                />

                <SliderBody
                    stage={this.state.stage}
                />

                {/* <BodyDnD /> */}

                <DataFooter />

            </div>

        )
    }
}