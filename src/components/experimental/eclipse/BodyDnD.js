import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class EclipseDnD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            }
        };
    }

    eventLogger = e => {
        console.log('Event: ', e);

        console.log('Data: ', e.target);
    };

    componentDidMount() {
        window.addEventListener("onClick", this.eventLogger);
    }

    render() {

        return (

            <div className="body-dnd">
                <Draggable
                    bounds="parent"
                    axis="x"
                    handle=".handle"
                    position={null}
                    grid={[1, 1]}
                    zIndex={100}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}
                >

                    <div className="handle">
                        <span>&#9788;</span>
                    </div>

                </Draggable >
            </div>


        );
    }


}
