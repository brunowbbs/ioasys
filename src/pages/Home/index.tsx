import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Api from "../../services/Api";
import ItemList from "../../components/ItemList";
import Filter from "../../components/Filter";

import * as S from './styles';
import { findAllEntreprises, findEntreprisByNameAndCategory } from "../../services";

export function Home() {
  const [enterprises, setEnterprises] = useState([]);
  const [isIndicator, setIsIndicator] = useState(true);

  const authCredentials = useSelector((state: any) => state.auth);

  useEffect(() => {
    /* async function getEnterprises() {
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
    setIsIndicator(false); */
    getAllEnterprise()
  }, []);


  function getAllEnterprise() {
    findAllEntreprises(authCredentials)
      .then((res) => {
        setEnterprises(res.enterprises);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsIndicator(false))
  }


  function getEnterpriseByCategory(type: string) {
    findEntreprisByNameAndCategory(authCredentials, type)
      .then((res) => {
        setEnterprises(res.enterprises);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsIndicator(false))
  }


  return (
    <S.Container>
      {isIndicator ? (
        <S.Indicator />
      ) : (
        <>
          <S.ContainerHeader>
            <S.Logo source={require('../../assets/img/logo.png')} resizeMode="contain" />
          </S.ContainerHeader>

          <Filter getEnterpriseByCategory={getEnterpriseByCategory} getAllEnterprise={getAllEnterprise} />

          <S.Title>{`${enterprises.length.toPrecision()} available enterprises`}</S.Title>

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

