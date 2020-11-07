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

  const hasAction = props.noLink;

  console.log(props)

  return (
    <Container>
      <List>
        {props.items.map((movie) => (
          <Link key={movie.id} to={hasAction ? () => {} : () => to(movie)}>
            <ListItem
            key={movie.id}
            onClick={() => {
              if(hasAction){
                props.onClick(movie);
              }
            }}>
            {movie.title}
          </ListItem>
          </Link>
        ))}
      </List>
    </Container>
  );
}

export default ListView;
