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
  const canGoNext = email && password;
  const onSubmit = useCallback(() => {
    Alert.alert('알림', '안녕~');
  }, []);
  const onChangeEmail = useCallback((text) => {setEmail(text)},[])
  };
  const onChangePassword = text => {
    setPassword(text);
  };

  return (
    <View>
      <View>
        <Text>이메일(아이디)</Text>
        <TextInput
          placeholder="이메일을 입력하세요"
          onChangeText={onChangeEmail}
        />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력하세요"
          onChangeText={onChangePassword}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            canGoNext
              ? [styles.loginButton, styles.loginButtonActive]
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
});

export default SignIn;
