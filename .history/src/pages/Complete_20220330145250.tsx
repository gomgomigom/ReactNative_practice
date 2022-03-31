import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

function Complete() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Pressable onPress={() => setCount(count => count + 1)}>완료</Pressable>
    </View>
  );
}

export default Complete;
