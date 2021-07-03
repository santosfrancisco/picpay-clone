import React from "react";

import { Text } from "react-native";

import * as Styled from "./styles";

const cards = [
  {
    key: Math.random(),
    title: "Pague suas contas sem sair de casa",
    image: require("../../images/09.png"),
    color: "#07a043",
  },
  {
    key: Math.random(),
    title: "Universitário! Cadastre-se e ganhe mais cashback",
    image: require("../../images/10.png"),
    color: "#162743",
  },
  {
    key: Math.random(),
    title: "Pague parcelado",
    image: require("../../images/11.png"),
    color: "#0165da",
  },
  {
    key: Math.random(),
    title: "Receba por QRCode",
    image: require("../../images/13.png"),
    color: "#278bdf",
  },
];

function Tips() {
  return (
    <Styled.Container>
      {cards.map((card) => (
        <Styled.Card key={card.key} bgColor={card.color}>
          <Styled.CardTitle>{card.title}</Styled.CardTitle>
          <Styled.CardImg source={card.image} />
        </Styled.Card>
      ))}
    </Styled.Container>
  );
}

export default Tips;
