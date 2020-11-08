import React from 'react';
import { Base, Content, Icon, HeaderText } from './elements';
import icon from "./../../assets/atom.png";

import back from "./../../assets/back.png";

import heart from "./../../assets/heart.png";
import email from "./../../assets/email.png";


import { withRouter } from 'react-router-dom';

function Header({ history }) {

    const isHome = history.location.pathname === "/";

    const paths = history.location.pathname.split("/");

    let subTitle = "";

    if(paths) {
      subTitle = `${paths[2]} Temporada`;
    }

    const title = isHome ? "The Big Bang Theory" : subTitle;

  return <Base>
      <Content>
        <div>
        <Icon onClick={() => history.goBack()} height="100%" src={isHome ? icon :  back} />
        <HeaderText>{title}</HeaderText>
        </div>

        <div>
        <Icon onClick={() => window.location.href = "https://www.paypal.com/donate?hosted_button_id=KZFWY4KC9Z7E6"} height="100%" src={heart} />
        </div>

      </Content>
  </Base>
}

export default withRouter(Header);