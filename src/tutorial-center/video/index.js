import React, { Component } from "react";
import styled from "styled-components";
import switchImg from "../img/switch.png";
import videoPoster from "../img/video_poster.png";

const VideoWrap = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 0 rgba(80, 87, 93, 0.2);
  position: relative;
  background: #fff;
  &:hover {
    border: 1px solid #4d68ff;
  }
`;
const getSize = props => {
  return props.switchSize === "small" ? "36px" : "72px";
};
const VideoSwitchWrap = styled.div`
  width: ${getSize};
  height: ${getSize};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${switchImg}) no-repeat;
  background-size: contain;
  cursor: pointer;
  z-index: 2;
  display: ${props => (props.visible ? "none" : "block")};
`;

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: false,
      controlsStatus: false
    };
    this.videoRef = React.createRef();
  }

  handleSwitchClick = () => {
    const { paused, ended } = this.videoRef.current;
    if (paused || ended) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.pause();
    }
    this.setState({ controlsStatus: true });
  };
  switchPlayStatus = () => {
    const { playStatus } = this.state;
    this.setState({
      playStatus: !playStatus
    });
  };

  componentDidMount() {
    const currentVideo = this.videoRef.current;
    currentVideo.addEventListener("play", () => {
      this.switchPlayStatus();
    });
    currentVideo.addEventListener("pause", () => {
      this.switchPlayStatus();
    });
    currentVideo.addEventListener("ended", () => {
      currentVideo.load();
    });
  }
  componentWillUnmount() {
    const currentVideo = this.videoRef.current;
    currentVideo.removeEventListener("play", () => {
      this.switchPlayStatus();
    });
    currentVideo.removeEventListener("pause", () => {
      this.switchPlayStatus();
    });
    currentVideo.removeEventListener("ended", () => {
      currentVideo.load();
    });
  }

  render() {
    const {
      src = "https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4",
      switchSize,
      poster
    } = this.props;
    const { playStatus, controlsStatus } = this.state;
    const chosenPoster = poster ? poster : videoPoster;
    return (
      <VideoWrap>
        <VideoSwitchWrap
          onClick={this.handleSwitchClick}
          visible={playStatus}
          switchSize={switchSize}
        />
        <video
          ref={this.videoRef}
          src={src}
          style={{ width: "100%", height: "100%" }}
          controls={controlsStatus}
          poster={chosenPoster}
        ></video>
      </VideoWrap>
    );
  }
}
