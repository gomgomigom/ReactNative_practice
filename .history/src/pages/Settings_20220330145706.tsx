import {Pressable, Text, View} from 'react-native';
import React from 'react';

function Setting() {
  return (
    <View>
      <Pressable onPress={()=>{setCount(()=>+1)}}}>
        <Text>설정</Text>
      </Pressable>
    </View>
  );
}

export default Setting;
