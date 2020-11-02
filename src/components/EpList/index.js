import React from "react";
import { Container, Title, List, ListItem } from "./elements";

function EpList(props) {
  return (
    <Container>
      <Title>1 Temporada</Title>
      <List>
        {props.db.videos.map((movie) => (
          <ListItem
            key={movie.id}
            onClick={() => props.setPlaying(movie)}
            playing={props.playing?.id === movie.id}
          >
            {movie.title}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default EpList;
