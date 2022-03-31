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
      <View style={styles.login}>
        <Pressable onPress={onSubmit} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={onSubmit} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  loginButtonText: {
    fontSize: 30,
    color: 'white',
  },
});

export default SignIn;
