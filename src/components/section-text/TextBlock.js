import React, { Component } from 'react';

export default class TextBlock extends Component {

    render() {

        var styles = {
            backgroundImage: `${this.props.gradient}`
        };

        return (
            <section style={styles} className="block-text-section">
                <div className={`wrapper-block-text container-${this.props.container}-section`}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}