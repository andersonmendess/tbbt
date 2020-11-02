import React, { createRef, useState, useEffect} from 'react';

import {Center, Title, CenteredContent, VideoArea, MinTitle, Actions, ActionButton } from "./CenterTitle";

import Divider from "../../components/Divider"

import nextIcon from "../../assets/next-ep.png";
import prevIcon from "../../assets/back-ep.png";
import downloadIcon from "../../assets/download.png";
import backlistIcon from "../../assets/back-list.png";

import getAll from "../../data/temp1";

function Main(props) {
  const videos = getAll().videos;

  const ep = props.match.params.episode;
  const season = props.match.params.season;

  const videoRef = createRef();

  const [ video, setVideo ] = useState({});
  const [ episode, setEpisode ] = useState(parseInt(ep));

  useEffect(() => {

    setVideo(videos.find((video) => video.id === episode));

  }, [episode]);

  window.addEventListener("orientationchange", async function() {                
    
    const orientation = window.screen.orientation;

    try {
      if (orientation.type === "landscape-primary" && !videoRef.current.webkitDisplayingFullscreen) {
        await videoRef.current.requestFullscreen({ navigationUI: "hide"});
  
      } else if (orientation.type === "landscape-secondary" && !videoRef.current.webkitDisplayingFullscreen) {
        await videoRef.current.requestFullscreen({ navigationUI: "hide"});
      } 
    } catch (error) {}

}, false);
  return (
    <CenteredContent>
      <Center>
        <VideoArea>
        <video key={video.url} ref={videoRef} autoPlay width="100%"controls disablePictureInPicture controlsList="nodownload">
          <source src={video.url} type="video/mp4"/>
        </video>

        <Title>{video.title}</Title>
        <MinTitle>{season} Temporada</MinTitle>
        <Divider />

        <Actions>
        <ActionButton>
            <img src={backlistIcon} width="30px" alt="next" />
            <span>Voltar</span>
          </ActionButton>
        <div style={{display:"flex", flexDirection: "row"}} >
          <ActionButton onClick={ () => { 
            setEpisode(episode-1)
          }}>
            <img src={prevIcon} width="30px" alt="next" />
            <span>Anterior</span>
          </ActionButton>
          <ActionButton onClick={ () => { 
            setEpisode(episode+1)
          }}>
            <img src={nextIcon} width="30px" alt="next" />
            <span>Proximo</span>
          </ActionButton>
        </div>

        <ActionButton>
            <img src={downloadIcon} width="30px" alt="next" />
            <span>Baixar</span>
          </ActionButton>


        </Actions>

        </VideoArea>
        
      </Center>
    </CenteredContent>
  );
}

export default Main;
