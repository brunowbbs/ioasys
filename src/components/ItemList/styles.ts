import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ItemList = styled(RectButton)`
  padding: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 150px;
`;

export const ContentLine = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: 5px;
`;

export const ContentColumn = styled.View`

margin-top: 5px;
`;

export const ContentLocale = styled.View`
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 20px;
`;

export const Type = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  border-width: 1.5px;
  font-size: 13px;
  padding: 1px 8px;
  border-radius: 12px;
`;

export const Locale = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
   font-size:16px;
  margin-top: -2px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;

`;

