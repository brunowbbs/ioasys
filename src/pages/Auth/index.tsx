import React, { useState } from "react";
import { Platform } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import * as S from './styles';

import { signIn } from "../../services";

export function Auth({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(true);
  const [indicator, setIndicator] = useState(false);
  const [email, setEmail] = useState("testeapple@ioasys.com.br");
  const [password, setPassword] = useState("12341234");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setIndicator(true);

    try {
      setErrorMessage("");
      const responseFetchSignin = await signIn(email, password);

      dispatch({
        type: "SET_CREDENTIALS",
        payload: {
          accessToken: responseFetchSignin.headers["access-token"],
          client: responseFetchSignin.headers.client,
          uid: responseFetchSignin.headers.uid,
        },
      });

      navigation.reset({
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      setErrorMessage(`Falha ao realizar login. ${error}`);
    } finally {
      setIndicator(false);
    }
  };

  return (

    <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <S.Logo source={require("../../assets/img/logo.png")} resizeMode="contain" />

      <S.ContainerInputMail>
        <Icon name="envelope-o" size={18} color="#8a8a8a" />
        <S.Input
          value={email}
          placeholder="Digite seu email"
          autoFocus
          autoCapitalize="none"
          placeholderTextColor="#6a6a6a"
          onChangeText={(txt) => setEmail(txt)}
        />
      </S.ContainerInputMail>
      <S.ContainerInputPassword>
        <Icon name="lock" size={20} color="#8a8a8a" />
        <S.Input
          value={password}
          placeholder="Digite sua senha"
          placeholderTextColor="#6a6a6a"
          secureTextEntry={showPassword}
          onChangeText={(txt) => setPassword(txt)}
        />

        <Icon
          onPress={() => setShowPassword(!showPassword)}
          color="#8a8a8a"
          name="circle"
          size={16}
        />
      </S.ContainerInputPassword>
      <S.ContainerErrorMessage>
        <S.MessageError>{errorMessage}</S.MessageError>
      </S.ContainerErrorMessage>
      <S.ButtonLogin onPress={handleLogin} disabled={indicator}>
        {indicator ? (
          <S.ActivityIndicator />
        ) : (
          <S.ButtonLoginText>Entrar</S.ButtonLoginText>
        )}
      </S.ButtonLogin>
    </S.Container>
  );
};
