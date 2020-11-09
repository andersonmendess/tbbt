import React, { useEffect } from 'react';

import ListView from "../../components/ListView"

import {Center, Title, CenteredContent} from "./elements";

import data from "../../data";


function Main(props) {

  const all = data.getAll();

  useEffect(() => {
    document.title = props.match.params.season + " Temporada - The Big Bang Theory";
 }, [props.match.params.season]);

  return (
    <CenteredContent>
      <Center>
        <Title>
        Episódios
        </Title>
      </Center>
      <ListView items={all[props.match.params.season - 1].videos} match={props.match} />
    </CenteredContent>
  );
}

export default Main;
