import React, { Component } from 'react';
/* import navLogo from '../../assets/icons/logo_infobae_naranja.svg' */

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { navBarType: "sticky-side" };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = e => {
        let element = e.target
        let distanceScroll = element.scrollingElement.scrollTop
        if (distanceScroll > 0) {
            this.setState({ navBarType: "sticky-side" });
        } else {
            this.setState({ navBarType: "sticky-side" });
        }
    }

    render() {
        return (
            <nav
                id="navbar"
                className={`navbar ${this.state.navBarType}`}
                onScroll={this.handleScroll}
            >
                <a className="navbar-link" href="https://www.infobae.com">
                    <img
                        className="navbar-logo"
                        src={require('../../assets/icons/logo_infobae_naranja.svg')} alt="Infobae"
                    />
                </a>
            </nav>
        );
    }
}