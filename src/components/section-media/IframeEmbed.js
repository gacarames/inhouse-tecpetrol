import React, { Component } from 'react';

export default class EmbedVideo extends Component {
    render() {

        var styles = {
            backgroundImage: `url(${this.props.skin})`,
            paddingLeft: this.props.padding,
            paddingRight: this.props.padding

        };
        return (
            <section style={styles} className="embed-video-section">
                <div className={`container-${this.props.container}-section`}>
                    <div className={`wrapper-embed-video ratio-${this.props.ratio}`}>
                        <iframe
                            className="embed-video"
                            src={this.props.src}
                            frameBorder="0"
                            title="Iframe Title"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            controls
                        >
                        </iframe>
                    </div>
                </div>
            </section>
        );
    }
}