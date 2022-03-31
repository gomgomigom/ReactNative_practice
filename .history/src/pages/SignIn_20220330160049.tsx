import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback} from 'react';

function SignIn() {
  const onSubmit = useCallback(() => {
    Alert.alert('알림', '안녕~');
  }, []);
  return (
    <View>
      <View>
        <Text>이메일(아이디)</Text>
        <TextInput placeholder="이메일을 입력하세요" />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력하세요" />
      </View>
      <View>
        <Pressable onPress={onSubmit} style={styles.loginButton}>
          <Text>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  loginButton: {
    backgroundColor: 'blue',
  },
});

export default SignIn;
