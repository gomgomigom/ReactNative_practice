declare module 'react-native-keyboard-aware-scrollview' {
  import * as React from 'react';
  import {Constructor, ViewProps} from 'react-native';

  class KeyboardAwareScrollViewComponent extends React.Component<ViewProps> {}
  const keyboardAwareScrollViewBase: KeyboardAwareScrollViewComponent &
    Constructor<any>;
}
