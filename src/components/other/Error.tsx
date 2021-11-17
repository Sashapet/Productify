import React from 'react';
import { scale } from '@utils/helpers/dimensions';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { selectors } from '@state/selectors';

export const Error: React.FC = ({ children }) => {
  const firebaseErr = useSelector(selectors.app.firebaseErr);

  return <ErrorText>{firebaseErr ? firebaseErr : children}</ErrorText>;
};

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
`;
