import React from 'react';
import ListView from "../../components/ListView"
import {Center, Title, CenteredContent} from "./elements";
import { isMobile } from 'react-device-detect';

import data from "../../data";

function Main(props) {

  const all = data.getAll();

  if(isMobile) {
    return (
      <CenteredContent>
        <Center>
          <Title>
            Temporadas disponiveis
          </Title>
        </Center>
        <ListView onClick={(movie) => {console.log(movie)}} items={all.flatMap(e => (
          {
            "id": e.id,
            "title": e.name
          })
          
        )} match={props.match} />
      </CenteredContent>
    );
  }

  return (
    <CenteredContent>
      <Center>
        <Title>
          Temporadas
        </Title>
      </Center>
      <ListView items={all.flatMap(e => (
        {
          "id": e.id,
          "title": e.name
        })
        
      )} match={props.match} />
    </CenteredContent>
  );
}

export default Main;
