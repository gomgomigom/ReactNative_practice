import {Text, TextInput, View} from 'react-native';
import React from 'react';

function SignIn() {
  return (
    <>
      <View>
        <Text>아이디</Text>
        <TextInput placeholder="아이디를 입력하세요" />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력하세요" />
      </View>
      <View>
        <Text>로그인</Text>
      </View>
    </>
  );
}

export default SignIn;
