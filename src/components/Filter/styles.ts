import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Content = styled(RectButton)`
  background: #000;
  height: 35px;
  padding: 0 10px;
  justify-content: center;
  margin: 5px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: #FFF;
  font-weight: 600;
`;

export const CategoryList = styled.FlatList``;