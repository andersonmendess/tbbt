import React from "react";
import { Container } from "./elements";
import { useHistory } from "react-router-dom";

import play from "./../../assets/play.png";

function Continue() {

  const history = useHistory();

  const last = localStorage.getItem("continue");

  if(!last){
    return <Container style={{cursor: "default"}}><span style={{fontSize: "24px"}}>Temporadas</span></Container>;
  }

  const data = JSON.parse(last);

  return (
      <Container onClick={() => history.push(`/seasons/${data.season}/episodes/${data.video.id}`)}>
        <img src={play} height="22px" alt="continue assistindo"/>
        <div>
        <h4>Continuar assistindo</h4>
  <p>{data.title} - {data.season} Temporada</p>
        </div>
      </Container>
  );
}

export default Continue;