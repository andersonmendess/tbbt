import React from 'react';
import ListView from "../../components/ListView"
import {Center, Title, CenteredContent} from "./elements";

import Support from "../../components/support"


import data from "../../data";

function Main(props) {

  const all = data.getAll();

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

      <Support/>
    </CenteredContent>
  );
}

export default Main;
