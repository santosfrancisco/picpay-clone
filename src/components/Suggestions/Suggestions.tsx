import React from "react";
import { Text } from "react-native";

import * as Styled from "./styles";

const items = [
  {
    key: Math.random(),
    image: require("../../images/01.png"),
    label: "Doações",
  },
  {
    key: Math.random(),
    image: require("../../images/02.png"),
    label: "Doações",
  },
  {
    key: Math.random(),
    image: require("../../images/03.png"),
    label: "Doações",
  },
  {
    key: Math.random(),
    image: require("../../images/04.png"),
    label: "Doações",
  },
  {
    key: Math.random(),
    image: require("../../images/05.png"),
    label: "Doações",
  },
  {
    key: Math.random(),
    image: require("../../images/06.png"),
    label: "Doações",
  },
  {
    key: Math.random(),
    image: require("../../images/07.png"),
    label: "Doações",
  },
];

function Suggestions() {
  return (
    <Styled.Container>
      <Styled.ScrollWrapper>
        {items.map((item) => (
          <Styled.Wrapper key={item.key}>
            <Styled.Img source={item.image} />
            <Styled.Label>{item.label}</Styled.Label>
          </Styled.Wrapper>
        ))}
      </Styled.ScrollWrapper>
    </Styled.Container>
  );
}

export default Suggestions;
