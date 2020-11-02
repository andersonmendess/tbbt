import React from 'react';

import ListView from "../../components/ListView"

import {Center, Title, CenteredContent} from "./CenterTitle";

import getAll from "../../data/temp1";


import {
  Link
} from "react-router-dom";


function Main(props) {

  const all = [getAll()];



  if(props.match.params.season) {
    return (
      <CenteredContent>
        <Center>
          <Title>
          Episódios disponiveis
          </Title>
        </Center>
        <ListView items={all[0].videos} match={props.match} />
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
