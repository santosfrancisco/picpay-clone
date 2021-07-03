import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #1f1f29;
`;

export const ScrollWrapper = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;

export const Wrapper = styled.View`
  padding: 16px 8px;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  margin-top: 8px;
`;
