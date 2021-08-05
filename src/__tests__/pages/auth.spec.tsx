import React from 'react';
import { render } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux';



import { Auth } from '../../pages/Auth';

test('checkando se o placeholder dos input email está correto', () => {
  const { getByPlaceholderText } = render(<Auth />)

  const inputName = getByPlaceholderText("Digite seu email");

})