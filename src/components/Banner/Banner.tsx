import React from "react";

import * as Styled from "./styles";

const Banner = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>Cobre um amigo</Styled.Title>
        <Styled.Content>
          Mantenha suas parcerias em dia, use o PicPay para fazer uma cobrança
        </Styled.Content>
        <Styled.Action>
          <Styled.ActionText>Cobrar agora</Styled.ActionText>
        </Styled.Action>
      </Styled.Wrapper>
      <Styled.Img source={require("../../images/12.png")} />
    </Styled.Container>
  );
};

export default Banner;
