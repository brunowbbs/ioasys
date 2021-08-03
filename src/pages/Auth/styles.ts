import styled from "styled-components/native";


export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 40%;
  max-width: 200px;
  max-height: 200px;
`;

export const ContainerInputMail = styled.View`
  padding: 0 15px;
  flex-direction: row;
  border-radius: 10px;
  width: 85%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background: #cacaca;
`;

export const ContainerInputPassword = styled.View`
  padding: 0 15px;
  flex-direction: row;
  border-radius: 10px;
  width: 85%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  background: #cacaca;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 55px;
  padding: 0 10px;
  font-size: 16px;
  color: #3a3a3a;
  font-family: ${({ theme }) => theme.fonts.light};
`;

export const ContainerErrorMessage = styled.View``;

export const MessageError = styled.Text`
  font-size: 13px;
  text-align: center;
  max-width: 70%;
  color: #e14d48;
  margin: 5px 0;
  font-family: "Poppins-light";
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 85%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  height: 55px;
  margin: 0px 0;
  border-radius: 5px;
`;

export const ButtonLoginText = styled.Text`
  font-size: 18px;
  color: #3a3a3a;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ActivityIndicator = styled.ActivityIndicator``;
