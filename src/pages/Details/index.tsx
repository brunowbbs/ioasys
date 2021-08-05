import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { findEntrepriseById } from '../../services';


export function Details() {
  const { params } = useRoute();
  const navigation = useNavigation();

  const [enterprise, setEnterprise] = useState({});


  const authCredentials = useSelector((state: any) => state.auth);

  useEffect(() => {
    getAEnterprise()
  }, []);


  function getAEnterprise() {
    findEntrepriseById(authCredentials, params.id)
      .then((res) => {
        setEnterprise(res.enterprise);
      })
      .catch((err) => console.log(err))
  }


  return (
    <S.Container>

      <S.Button onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} />
      </S.Button>

      <S.Image source={{ uri: `http://empresas.ioasys.com.br${enterprise.photo}` }} />

      {enterprise.id ? (
        <S.Content>
          <S.Title>{enterprise.enterprise_name}</S.Title>

          <S.ContainerRow style={{ marginVertical: 10 }}>
            <S.ContainerRow>
              <Icon name="place" size={18} style={{ marginRight: 5 }} />
              <S.Text>{`${enterprise.city} - ${enterprise.country}`}</S.Text>
            </S.ContainerRow>

            <S.ContainerRow>
              <Icon name="emoji-flags" size={18} style={{ marginRight: 5 }} />
              <S.Text>{`${enterprise.enterprise_type?.enterprise_type_name} `}</S.Text>
            </S.ContainerRow>

            <S.ContainerRow>
              <Icon name="attach-money" size={18} style={{ marginRight: 2 }} />
              <S.Text>{`${enterprise.share_price}`}</S.Text>
            </S.ContainerRow>
          </S.ContainerRow>

          <S.Scroll showsVerticalScrollIndicator={false}>
            <S.Text>{enterprise.description}</S.Text>
          </S.Scroll>
        </S.Content>
      ) : undefined}


    </S.Container>
  )
}