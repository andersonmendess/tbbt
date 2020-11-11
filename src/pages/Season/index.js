import React from 'react';
import ListView from "../../components/ListView"
import {CenteredContent} from "./elements";

import Support from "../../components/support"
import Continue from "../../components/continue";


import data from "../../data";

function Main(props) {

  const all = data.getAll();

  return (
    <CenteredContent>
      <Continue/>
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
