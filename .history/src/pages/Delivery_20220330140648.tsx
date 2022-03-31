import {Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <Stack.Navigator>
      <View>
        <Text>주문</Text>
      </View>
    </Stack.Navigator>
  );
}

export default Delivery;
