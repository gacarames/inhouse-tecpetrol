import React, { Component } from 'react';

export default class Copyright extends Component {

    render() {
        return (
            <footer>
                <div className="footer-bottom">
                <div className="footer-copyright">
                    <span>{this.props.content}</span>
                </div>
                </div>
            </footer>
        );
    }
}