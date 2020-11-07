import React from "react";
import { Container, List, ListItem } from "./elements";

function EpList(props) {
  return (
    <Container>
      <List>
        {props.items.map((movie) => (
          <ListItem
            key={movie.id}
            onClick={() => props.setPlaying(movie.id)}
            playing={props.playing?.id === movie.id}
          >
            {movie.title.replace(".mp4", "")}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default EpList;
