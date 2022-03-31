import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

function Setting() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Pressable
        onPress={() => {
          setCount(() => +1);
        }}>
        <Text>설정</Text>
      </Pressable>
    </View>
  );
}

export default Setting;
