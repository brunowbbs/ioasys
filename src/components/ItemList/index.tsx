import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

const ItemComponent = ({ data }: any) => {
  const navigation = useNavigation();
  return (
    <S.ItemList onPress={() => navigation.navigate('Details', { id: data.id })}>
      <S.Image source={{ uri: `http://empresas.ioasys.com.br${data.photo}` }} />
      <S.ContentLine>
        <S.Type>{data.enterprise_type?.enterprise_type_name}</S.Type>
        <S.Price>
          $
          {data.share_price}
        </S.Price>
      </S.ContentLine>
      <S.ContentColumn>
        <S.Title>{data.enterprise_name}</S.Title>

        <S.ContentLocale>
          <S.Locale>{`${data.city} - ${data.country}`}</S.Locale>
        </S.ContentLocale>
      </S.ContentColumn>
    </S.ItemList>
  );
};

export default ItemComponent;
