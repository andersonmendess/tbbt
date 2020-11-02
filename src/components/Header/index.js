import React from 'react';
import { Base, Content, Icon, HeaderText } from './elements';
import icon from "./../../assets/atom.png";

import back from "./../../assets/back.png";

function Header() {

    const isHome = false;
    const title = isHome ? "The Big Bang Theory" : "1 Temporada";

  return <Base>
      <Content>
        <Icon src={isHome ? icon :  back} />
        <HeaderText>{title}</HeaderText>
      </Content>
  </Base>
}

export default Header;