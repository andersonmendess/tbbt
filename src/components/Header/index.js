import React from 'react';
import { Base, Content, Icon, HeaderText } from './elements';
import icon from "./../../assets/atom.png";

import back from "./../../assets/back.png";
import { withRouter } from 'react-router-dom';

function Header({ history }) {

    const isHome = history.location.pathname === "/";

    console.log(history)

    const title = isHome ? "The Big Bang Theory" : "";

  return <Base>
      <Content>
        <Icon onClick={() => history.goBack()} height={isHome ? "100%" :  "75%"} src={isHome ? icon :  back} />
        <HeaderText>{title}</HeaderText>
      </Content>
  </Base>
}

export default withRouter(Header);