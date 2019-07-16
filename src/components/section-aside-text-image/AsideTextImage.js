import React, { Component } from 'react';

export default class AsideTextImage extends Component {
    render() {


        let imageContent = null;

        if (this.props.image) {
            imageContent = <img className="image" src={this.props.image} alt="alt-text"></img>;
        }

        return (
            <section className="aside-image-block-section">
                <div className="wrapper-aside-image-block container-wide-section">
                    <div className={`aside-image-block ${this.props.side}`}>
                        <div className="aside-image-block-item text">
                            <p>{this.props.content}</p>
                            <div className="extra-background-color"></div>
                        </div>
                        <div className={`aside-image-block-item media`}>
                            {this.props.children}
                            {imageContent}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}