import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled(RectButton)`
  background: #fafafa;
  position: absolute;
  z-index: 99;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 50px;
  margin-left: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Content = styled.View`
  padding: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 27px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Scroll = styled.ScrollView``;

export const Text = styled.Text`
  text-align: justify;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.light};
`;
