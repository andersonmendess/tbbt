import React from "react";
import { Container, List, ListItem } from "./elements";
import {
  Link
} from "react-router-dom";
function ListView(props) {

  if(!props.items) {
    return <></>;
  }

  const isEp = props.match.params.season || false;

  return (
    <Container>
      <List>
        {props.items.map((movie) => (
          <Link key={movie.id} to={isEp ? `/seasons/${isEp}/episodes/${movie.id}` : `/seasons/${movie.id}`}>
            <ListItem
            key={movie.id}
            onClick={() => {

              // console.log(props.match);

              // if(props.match.params.season) {
              //   const season = props.match.params.season;

              //   history.push(`/seasons/${season}/episodes/${movie.id}/`);
              // } else {
              //   history.push(`/seasons/${movie.id}/`);
              // }

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
