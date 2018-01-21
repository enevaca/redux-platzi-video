import React, { Component } from 'react';
import './video.css';

class Video extends Component {

    togglePlay() {
        if(this.props.pause) {
            this.video.play()
        } else {
            this.video.pause()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay()
        }
    }

    setRef = element => {
        this.video = element
    }

    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeded,
        } = this.props

        return (
            <div className="Video">
                <video //https://reactjs.org/docs/events.html
                    autoPlay={this.props.autoplay}
                    src={this.props.src} 
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeded}
                />
            </div>
        )
    }
}

export default Video;