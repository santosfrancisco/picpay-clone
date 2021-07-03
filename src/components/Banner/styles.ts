import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #54689f;
  border-radius: 8px;

  margin-top: 18px;
  padding: 16px;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Content = styled.Text`
  color: #fff;
`;

export const Action = styled.TouchableOpacity`
  padding: 16px 0;
  width: 100px;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Img = styled.Image``;
