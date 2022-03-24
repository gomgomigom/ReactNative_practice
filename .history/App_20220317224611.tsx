/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={onClick}
          style={{padding: 20, backgroundColor: 'skyblue'}}>
          <Text style={{color: 'blue'}}>다해의 어플</Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          style={{backgroundColor: 'skyblue', padding: 10}}
          onPress={onClick}>
          <Text>Hello World!</Text>
        </Pressable>
      </View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable style={{backgroundColor: 'orange'}} onPress={onClick}>
        <Text>Hello World!</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈화면'}}
        />
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
