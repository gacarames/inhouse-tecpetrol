import React, { Component } from 'react';

export default class ScrollOpacity extends Component {
    constructor(props) {
        super(props);
        this.state = { bgScrollOpacity: "0" };
    }

    /* convertHex(hex, opacity) {
        hex = hex.replace('#', '');
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);

        result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;

        convertHex('#A7D136',50)
    } */

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = e => {
        let element = e.target

        let bodyHeight = document.getElementsByClassName('scroll-opacity')[0].clientHeight

        let distanceScroll = element.scrollingElement.scrollTop

        let percentScroll = (distanceScroll / bodyHeight);

        if (distanceScroll > 0) {

            this.setState({ bgScrollOpacity: percentScroll });
        } /* else {
            this.setState({ bgscrollColor: "sticky-side" });
        } */
    }

    render() {

        var styles = {
            backgroundColor: `rgba(0, 0, 0, ${this.state.bgScrollOpacity})`
            /* backgroundColor: this.state.bgScrollOpacity */
        };

        return (
            <div
                className="scroll-opacity"
                style={styles}
                onScroll={this.handleScroll}
            >
                {this.props.children}
            </div>
        )
    }
}