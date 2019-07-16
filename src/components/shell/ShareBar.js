import React, { Component } from 'react';
import ShareButton from './ShareButton';

export default class ShareBar extends Component {


    render() {

        let facebookButton = null;
        let twitterButton = null;

        if (this.props.shareFacebook) {
            facebookButton = <ShareButton
                socialNet="facebook"
                shareLink={this.props.shareFacebook}

            />;
        }

        if (this.props.shareTwitter) {
            twitterButton = <ShareButton
                socialNet="twitter"
                shareLink={this.props.shareTwitter}

            />;
        }

        return (
            <div className="icon-bar">
                {this.props.children}
                {facebookButton}
                {twitterButton}
            </div>
        );
    }
}