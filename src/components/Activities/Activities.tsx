import React, { ReactNode } from "react";

import { Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import * as Styled from "./styles";

function Activities() {
  return (
    <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title>Atividades</Styled.Title>
      </Styled.TitleWrapper>

      <Styled.Activity>
        <Styled.Header>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Styled.Avatar source={require("../../images/avatar.png")} />
            <Styled.Action>
              <Styled.Bold>Você</Styled.Bold> pagou à{" "}
              <Styled.Bold>John Doe</Styled.Bold>
            </Styled.Action>
          </View>
          <Styled.AuthorName>Francisco Santos</Styled.AuthorName>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Styled.Value>R$ 18,00</Styled.Value>
              <Styled.CustomText>|</Styled.CustomText>
              <MaterialCommunityIcons
                size={18}
                style={{ paddingRight: 4 }}
                name="lock-outline"
                color="#a1a1a1"
              />
              <Styled.Date>2 anos atrás</Styled.Date>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                size={18}
                name="chat-bubble-outline"
                color="#a1a1a1"
              />
              <Styled.CustomText>1</Styled.CustomText>
              <MaterialCommunityIcons
                size={18}
                name="heart-outline"
                color="#a1a1a1"
              />
              <Styled.CustomText>0</Styled.CustomText>
            </View>
          </View>
        </Styled.Header>
      </Styled.Activity>
    </Styled.Container>
  );
}

export default Activities;
