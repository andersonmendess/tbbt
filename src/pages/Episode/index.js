import React from 'react';

import ListView from "../../components/ListView"

import {Center, Title, CenteredContent} from "./elements";

import data from "../../data";


function Main(props) {

  const all = data.getAll();

  return (
    <CenteredContent>
      <Center>
        <Title>
        Episódios disponiveis
        </Title>
      </Center>
      <ListView items={all[props.match.params.season - 1].videos} match={props.match} />
    </CenteredContent>
  );
}

export default Main;
