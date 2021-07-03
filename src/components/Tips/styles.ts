import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 18px;
  flex-direction: row;
`;

export const Card = styled.TouchableOpacity<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor ?? "#1f1f29"};
  width: 120px;
  height: 190px;

  align-items: center;
  justify-content: space-between;

  padding: 12px;

  margin-right: 16px;
  border-radius: 8px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CardImg = styled.Image``;
