import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

function Complete() {
  const [count, setCount] = useState();

  return (
    <View>
      <Pressable onPress={() => setCount(count => count + 1)}>
        <Text></Text>
      </Pressable>
    </View>
  );
}

export default Complete;
