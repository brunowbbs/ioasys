import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import ItemList from "../../components/ItemList";
import Api from "../../services/Api";
import * as S from './styles';


export function Home() {
  const [enterprises, setEnterprises] = useState([]);
  const [isIndicator, setIsIndicator] = useState(true);

  const authCredentials = useSelector((state: any) => state.auth);

  useEffect(() => {
    async function getEnterprises() {
      try {
        const result = await Api.get("/enterprises", {
          headers: {
            "access-token": authCredentials.accessToken,
            client: authCredentials.client,
            uid: authCredentials.uid,
          },
        });
        setEnterprises(result.data.enterprises);
      } catch (error) {
        alert(`Erro ao buscar empresas: ${error}`);
      }
    }
    getEnterprises();
    setIsIndicator(false);
  }, []);

  return (
    <S.Container>
      {isIndicator ? (
        <S.Indicator />
      ) : (
        <>
          <S.ContainerInput>
            <S.SearchText>Pesquisar</S.SearchText>
            <Icon name="search" size={18} />
          </S.ContainerInput>
          <S.Title>{`${enterprises.length.toPrecision()} empresas disponíveis`}</S.Title>

          <S.EnterprisesList
            data={enterprises}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => <ItemList data={item} />}
          />
        </>
      )}
    </S.Container>
  );
};

