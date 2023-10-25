import React, { Component } from "react";
const poly = "/img/desktop/home/poster1.png";

export class HomePageVideo extends Component {
  /*==============================================================
        play video
  ===============================================================*/
  playVideo = () => {
    let playPromise = document.getElementById("homePageVideoId").play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("unmuted");
        })
        .catch((error) => {
          console.log("muted");
        });
    }
  };

  /*==============================================================
        main
   ==============================================================*/
  render() {
    return (
      <>
        <div className="home-video-block">
          <video
            id="homePageVideoId"
            playsInline
            muted={false}
            //autoPlay
            loop
            onClick={this.playVideo}
            //onLoadStart={this.playVideo}
            //onLoadedDataCapture={this.playVideo}
            controls
            poster={poly}
          >
            <source
              src="https://res.cloudinary.com/dd4krpktw/video/upload/v1603785009/remote-teams/remote-teams-promo_xxiouo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </>
    );
  }
}

export default HomePageVideo;
