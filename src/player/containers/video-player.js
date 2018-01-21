import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        lastVolume: null,
        volume: 1,
    }

    toggleClick = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration,
        })
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime,
        })
    }

    handleProgessChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true,
        })
        
    }

    handleSeeded = event => {
        this.setState({
            loading: false,
        })
    }

    handleResetVolume = () => {
        const lastVolume = this.video.volume
        this.setState({ lastVolume })
        if(this.video.volume !== 0) {
          this.video.volume = 0
          this.setState({ volume: this.video.volume })
        } else {
          this.video.volume = this.state.lastVolume
          this.setState({ volume: this.video.volume })
        }
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value
        this.setState({ volume: this.video.volume })
    }

    handleFullScreenClick = event => {
        if(!document.webkitIsFullScreen) { //sólo para chrome
            // mando al full screen
            this.player.webkitRequestFullscreen()
        } else {
            // salgo de full screen
            document.webkitExitFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }

    render() {
        return (
            <VideoPlayerLayout 
                setRef={this.setRef}
            >
                <Title 
                    title={this.props.title}
                />
                <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.toggleClick}
                    />
                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar 
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgessChange={this.handleProgessChange}
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                        handleResetVolume={this.handleResetVolume}
                        volume={this.state.volume}
                    />
                    <FullScreen 
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeded={this.handleSeeded}
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;