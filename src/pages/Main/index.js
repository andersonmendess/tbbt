import React from 'react';

import ListView from "../../components/ListView"

import {Center, Title, CenteredContent} from "./CenterTitle";

import {getAll} from "../../data/temp1";

import state from "../../state";



function Main(props) {

  const all = getAll();

  const [ episode, setEpisode ] = state('episode');
  const [ season, setSeason ] = state('season');

  if(props.match.params.season) {
    return (
      <CenteredContent>
        <Center>
          <Title>
          Episódios disponiveis {episode}
          </Title>
        </Center>
        <ListView items={all[props.match.params.season - 1].videos} match={props.match} />
      </CenteredContent>
    );
  }

  return (
    <CenteredContent>
      <Center>
        <Title>
          Temporadas disponiveis
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
