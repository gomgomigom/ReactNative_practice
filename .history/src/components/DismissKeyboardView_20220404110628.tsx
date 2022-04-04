import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const DismissKeyboardView = ({children, ...props}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export dafault DismissKeyboardView;