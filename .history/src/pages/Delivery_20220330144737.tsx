import {Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';
import Complete from './Complete';

const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="Ing" component={Ing} options={{title: '내 오더'}} />
      <Stack.Screen
        name="complete"
        component={Complete}
        options={{title: '완료하기'}}
      />
    </Stack.Navigator>
  );
}

export default Delivery;
