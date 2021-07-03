import * as React from "react";
import SafeContainer from "../../components/SafeContainer";
import Suggestions from "../../components/Suggestions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as Styled from "./styles";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";
import { ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeContainer>
      <Styled.Container>
        <Styled.Header>
          <MaterialCommunityIcons
            style={{ flex: 1 }}
            name="qrcode-scan"
            size={30}
            color="#43dc7f"
          />

          <Styled.BalanceWrapper>
            <Styled.BalanceLabel>Meu Saldo</Styled.BalanceLabel>
            <Styled.BalanceValue>R$ 2,00</Styled.BalanceValue>
          </Styled.BalanceWrapper>

          <Styled.IconsWrapper>
            <MaterialCommunityIcons
              name="gift"
              size={30}
              color="#43dc7f"
              style={{ marginRight: 16 }}
            />
            <MaterialCommunityIcons name="percent" size={30} color="#43dc7f" />
          </Styled.IconsWrapper>
        </Styled.Header>
      </Styled.Container>
      <ScrollView>
        <Suggestions />

        <Styled.Container>
          <Activities />
          <Tips />
          <Banner />
        </Styled.Container>
      </ScrollView>
    </SafeContainer>
  );
};

export default Home;
