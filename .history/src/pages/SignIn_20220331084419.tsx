import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = useCallback(() => {
    Alert.alert('알림', '안녕~');
  }, []);
  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);
  const canGoNext = email && password;

  return (
    <View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>이메일(아이디)</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력하세요"
          onChangeText={onChangeEmail}
        />
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력하세요"
          onChangeText={onChangePassword}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            canGoNext
              ? StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
              : styles.loginButton
          }
          disabled={!canGoNext}>
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
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    fontSize: 30,
    color: 'white',
  },
  buttonZone: {
    alignItems: 'center',
  },
  label: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default SignIn;
