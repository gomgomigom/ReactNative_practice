/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Pressable,
  StyleSheet,
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
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={onClick}
          style={{padding: 20, backgroundColor: 'skyblue'}}>
          <Text style={{color: 'blue'}}>Details</Text>
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
  const onPress = () => {
    setShowModal(!showModal);
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Pressable
          style={{backgroundColor: 'orange', padding: 20}}
          onPress={onClick}>
          <Text>back to home</Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightgreen',
        }}>
        <Pressable
          style={{backgroundColor: 'wheat', padding: 20}}
          onPress={onPress}>
          <Text>Modal</Text>
        </Pressable>
      </View>
      {showModal && (
        <>
          <Pressable onPress={onPress} style={styles.modalOutter} />
          <View style={styles.modal}>
            <Text>Hello modal</Text>
            <Pressable style={styles.modalInner} onPress={onPress}>
              <Text style={{fontSize: 20}}>X</Text>
            </Pressable>
          </View>
        </>
      )}
    </>
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

const styles = StyleSheet.create({
  modal: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    margin: 50,
    borderRadius: 20,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInner: {
    position: 'absolute',
    backgroundColor: 'wheat',
    width: 30,
    height: 30,
    borderRadius: 20,
    top: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  modalOutter: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...StyleSheet.absoluteFillObject,
    padding: 20,
  },
});

export default App;
