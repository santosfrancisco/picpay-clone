import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Label = styled.Text<{ focused: boolean }>`
  font-size: 12px;
  color: ${({ focused }) => (focused ? "#000" : "#fff")};
`;
