import React, { createRef, useState, useEffect } from "react";

import {
  Center,
  Title,
  CenteredContent,
  VideoArea,
  MinTitle,
  Actions,
  ActionButton,
} from "./elements";

import Divider from "../../components/Divider";

import EpList from "../../components/EpList";

import nextIcon from "../../assets/next-ep.png";
import prevIcon from "../../assets/back-ep.png";
import fullScreenIcon from "../../assets/full-screen.png";
import backlistIcon from "../../assets/back-list.png";

import data from "../../data";

function Main(props) {
  const ep = props.match.params.episode;
  const season = props.match.params.season;

  const videos = data.getSeason(parseInt(season)).videos;

  const videoRef = createRef();

  const [video, setVideo] = useState({});
  const [episode, setEpisode] = useState(parseInt(ep));

  useEffect(() => {
    setVideo(videos.find((video) => video.id === episode));

  }, [episode, videos]);

  useEffect(() => {
    if(video.title) {
      document.title = `${video.title.replace(".mp4", "")} - The Big Bang Theory`;
    }
  }, [video]);

  if(!video) {
    window.location.href = "/"
    return;
  }

  let title = ""

  if(video.title){
    title = video.title.replace(".mp4", "")
  }

  const canNext = () => {
    return episode < videos.length;
  }

  const canPrev = () => episode > 1;

  return (
    <CenteredContent>
      <Center>
        <VideoArea>
          <video
            key={video.url}
            ref={videoRef}
            autoPlay
            width="100%"
            controls
            disablePictureInPicture
            controlsList="nodownload"
            onEnded={() => {
              setEpisode(episode + 1)
            }}
          >
            <source src={video.url} type="video/mp4" />
          </video>

          <Title>{title}</Title>
          <MinTitle>{season} Temporada</MinTitle>
          <Divider />

          <Actions>
            <ActionButton onClick={() => {
                  props.history.goBack();
                }}>
              <img src={backlistIcon} width="30px" alt="next" />
              <span>Voltar</span>
            </ActionButton>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ActionButton
                onClick={() => {
                  if(canPrev()){
                    props.history.replace(`${episode - 1}`)
                    setEpisode(episode - 1);
                  }
                }}
              >
                <img src={prevIcon} width="30px" alt="next" />
                <span>Anterior</span>
              </ActionButton>
              <ActionButton
                onClick={() => {

                  if(canNext()){
                    props.history.replace(`${episode + 1}`)
                    setEpisode(episode + 1);
                  }

                }}
              >
                <img src={nextIcon} width="30px" alt="next" />
                <span>Proximo</span>
              </ActionButton>
            </div>

            <ActionButton
              onClick={async () => {
                await videoRef.current.requestFullscreen({
                  navigationUI: "hide",
                });
              }}
            >
              <img src={fullScreenIcon} width="30px" alt="next" />
              <span>Tela cheia</span>
            </ActionButton>
          </Actions>
        </VideoArea>

        <EpList
          items={videos}
          playing={video}
          setPlaying={(id) => setEpisode(id)}
          match={props.match}
        />
      </Center>
    </CenteredContent>
  );
}

export default Main;
