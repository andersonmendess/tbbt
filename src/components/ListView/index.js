import React from "react";
import { Container, List, ListItem } from "./elements";
import {
  Link
} from "react-router-dom";


const ListView = (props) => {

  if(!props.items) {
    return <></>;
  }

  const isEp = props.match.params.season || false;

  const to = (movie) => isEp ? `/seasons/${isEp}/episodes/${movie.id}` : `/seasons/${movie.id}`;

  return (
    <Container>
      <List>
        {props.items.map((movie) => (
          <Link key={movie.id} to={() => to(movie)}>
            <ListItem
            key={movie.id}
            >
            {movie.title.replace(".mp4","")}
          </ListItem>
          </Link>
        ))}
      </List>
    </Container>
  );
}

export default ListView;
