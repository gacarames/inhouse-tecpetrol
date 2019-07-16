import React, { Component } from 'react';

export default class HeaderHero extends Component {

    render() {

        var styles = {
            backgroundImage: 'url(' + this.props.image + ')',
        };

        let labelContent = null;

        if (this.props.label) {
            labelContent = <span className="header-label">{this.props.label}</span>;
        }

        return (

            <header className={`header-hero`} style={styles}
            >
                <div className={`container-header ${this.props.vertical}`}>
                    <div className="wrapper-header">
                        {labelContent}
                        <h1 className="main-title">{this.props.title}</h1>
                    </div>
                </div>
            </header>

        );
    }
}