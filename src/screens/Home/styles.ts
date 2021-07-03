import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const BalanceWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
export const BalanceLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;
export const BalanceValue = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
export const IconsWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;
