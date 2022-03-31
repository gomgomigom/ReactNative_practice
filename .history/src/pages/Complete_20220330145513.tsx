import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

function Complete() {
  const [count, setCount] = useState();

  return (
    <View>
      <Pressable onPress={() => setCount(value: p => p + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Complete;
