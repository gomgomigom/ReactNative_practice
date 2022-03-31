import {Pressable, Text, TextInput, View} from 'react-native';
import React from 'react';

function SignIn() {
  return (
    <>
      <View>
        <Text>이메일(아이디)</Text>
        <TextInput placeholder="이메일을 입력하세요" />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력하세요" />
      </View>
      <View>
        <Pressable onPress={onSubmits}>
          <Text>로그인</Text>
        </Pressable>
      </View>
    </>
  );
}

export default SignIn;
