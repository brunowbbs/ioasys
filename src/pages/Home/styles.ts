import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display:flex;

`;

export const EnterprisesList = styled.FlatList`
  width:100%;
`;

export const Indicator = styled.ActivityIndicator``;


export const ContainerInput = styled.View`
  border: 1px;
  border-radius: 8px;
  margin: 0 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
`;

export const SearchText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.light};
`;

export const Title = styled.Text`
margin: 10px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;