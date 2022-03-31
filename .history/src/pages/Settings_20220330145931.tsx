import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

function Setting() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Pressable
        onPress={
          setCount(i => i + 1);
        }>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Setting;
