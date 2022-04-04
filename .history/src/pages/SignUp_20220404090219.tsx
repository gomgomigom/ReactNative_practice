import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignUp({navigation}: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const nameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', 'Please enter your email address');
    }
    if (!name || !name.trim()) {
      return Alert.alert('알림', 'Please enter your name');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', 'Please enter your password');
    }
    if (
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+))|(\".+\"))@(([^<>()\[\]\.,;:\s@\"]{2,})$/.test(
        email,
      )
    )
      Alert.alert('알림', '회원가입 되었습니다.');
  }, [email, name, password]);
  const onChangeEmail = useCallback(text => {
    setEmail(text.trim());
  }, []);
  const onChangeName = useCallback(text => {
    setName(text.trim());
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text.trim());
  }, []);
  const canGoNext = email && password && name;
  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>이메일(아이디)</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력하세요"
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            nameRef.current?.focus();
          }}
          blurOnSubmit={false}
          ref={emailRef}
          clearButtonMode="while-editing"
        />
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이름"
          value={name}
          onChangeText={onChangeName}
          importantForAutofill="yes"
          autoComplete="name"
          textContentType="name"
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false}
          ref={nameRef}
          clearButtonMode="while-editing"
        />
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          keyboardType="phone-pad"
          onSubmitEditing={() => {
            onSubmit();
          }}
          ref={passwordRef}
          clearButtonMode="while-editing"
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
          <Text style={styles.loginButtonText}>회원가입</Text>
        </Pressable>
        <Pressable onPress={toSignUp}>
          <Text style={styles.signUp}>회원가입</Text>
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
    marginTop: 25,
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    marginTop: 20,
    fontSize: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textWrapper: {
    padding: 20,
  },
  signUp: {
    fontSize: 16,
    padding: 20,
  },
});

export default SignUp;
