import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { actions } from '@state/actions';

export const HomeView = () => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(actions.auth.logOut());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      <Button onPress={logOut} title="LOG OUT" />
    </View>
  );
};
