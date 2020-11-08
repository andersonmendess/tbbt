import React from "react";
import { Container } from "./elements";

import heart from "./../../assets/heart.png";

function Support() {
  return (
      <Container onClick="">
        <img src={heart} height="50px" alt="donate"/>
        <div>
        <h3>Gostou? Que tal apoiar o projeto?</h3>
        <p>Ajude a custear os servidores para manter o projeto ativo :D</p>
        <p><a href="https://www.paypal.com/donate?hosted_button_id=KZFWY4KC9Z7E6">Clique aqui</a> ou entre em contato <b>anderson2000ano@gmail.com</b></p>
        </div>
      </Container>
  );
}

export default Support;
