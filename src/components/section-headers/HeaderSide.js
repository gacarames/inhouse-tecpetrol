import React, { Component } from 'react';
import Branding from './Branding';
import Author from './Author';

export default class HeaderSide extends Component {

    render() {

        return (

            <header className="header-aside-section">

                <div className="wrapper-header-aside header-container-large">

                    <div className="header-aside">

                        <div className="header-aside-item media">
                            <img className="header-aside-img" src={this.props.image} alt=""></img>
                        </div>

                        <Branding
                            image="https://ypf-agro.infobae.com/img/ypf-agro.svg"
                            date="12 de Julio 2019  "
                        />

                        <div className="header-aside-item text">
                            <span className="header-aside-label">{this.props.label}</span>
                            <h1 className="header-aside-main-title">{this.props.title}</h1>
                            <div className="extra-background-color"></div>
                        </div>

                        <Author
                            image="https://ypf-agro.infobae.com/img/user.svg"
                            author="Lorem Ipsum"
                        />


                    </div>
                </div>
            </header>

        );
    }
}