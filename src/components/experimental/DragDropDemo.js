import React, { Component } from 'react';

export default class AppDragDropDemo extends Component {

    state = {
        tasks: [
            {
                name: "Angular",
                category: "wip",
                bgcolor: "red"
            },
            {
                name: "React",
                category: "wip",
                bgcolor: "blue"
            },
            {
                name: "Vue",
                category: "wip",
                bgcolor: "skyblue"
            },
            {
                name: "Kotlin",
                category: "wip",
                bgcolor: "fuchsia"
            },
            {
                name: "Node",
                category: "wip",
                bgcolor: "pink"
            },
            {
                name: "Next",
                category: "wip",
                bgcolor: "green"
            }
        ]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev, id) => {
        console.log('dragstart', id);
        ev.dataTransfer.setData("id", id);
    }

    onDrop = (ev, cat) => {

        let id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task) => {
            if (task.name === id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {
        var tasks = {
            wip: [],
            complete: [],
            state1: [],
            state2: [],
            state3: [],
            state4: [],
            state5: []

        }

        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <div key={t.name}
                    onDragStart={(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style={{ backgroundColor: t.bgcolor }}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">

                <h2 className="header">DRAG & DROP DEMO</h2>

                <div
                    className="wip"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => { this.onDrop(e, "wip") }}
                >
                    <span className="task-header">WIP</span>

                    {tasks.wip}

                </div>

                <div
                    className="droppable"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "complete")}
                >

                    <span className="task-header">COMPLETED</span>
                    {tasks.complete}

                </div>
            </div>
        );
    }

}
