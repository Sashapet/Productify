import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const FormContainer: React.FC = ({ children }) => (
  <KeyboardAwareScrollView
    extraScrollHeight={15}
    enableOnAndroid={true}
    style={{ marginHorizontal: -20 }}
    contentContainerStyle={{ paddingHorizontal: 20 }}
    keyboardShouldPersistTaps={'handled'}
  >
    {children}
  </KeyboardAwareScrollView>
);
