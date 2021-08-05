import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { generateCategoriesList } from '../../utils';
import * as S from './styles';

export default function Filter({ getEnterpriseByCategory, getAllEnterprise }: any) {

  const [categories, setCategories] = useState([]);
  const authCredentials = useSelector((state: any) => state.auth);

  useEffect(() => {
    generateCategoriesList(authCredentials).then((res) => {
      setCategories(res);
    })
  }, [])

  return (
    <S.CategoryList
      horizontal
      style={{ marginTop: -30 }}
      contentContainerStyle={{ marginVertical: 15 }}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item.value}
      renderItem={({ item }) => (
        <S.Content onPress={() => item.value === -1 ? getAllEnterprise() : getEnterpriseByCategory(item.value)}>
          <S.Text>{item.label}</S.Text>
        </S.Content>
      )}
    />
  )
}