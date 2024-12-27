import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { startLoading, stopLoading } from '@/stores';


function Login() {
  const [email, setEmail] = useState(() => '');
  const [password, setPassword] = useState(() => '');
  const [remember, setRemember] = useState(() => false);
  const bg = require('@/assets/img/layout-bg.png');
  const Click = () => {
    startLoading('test');
    // API call
    setTimeout(() => {
      stopLoading('test');
    }, 2000);
  };
  return (
    <View style={styles.login}>
      <ImageBackground style={styles.bg} source={bg}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.title}>iService Cloud Platform</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={[styles.input, styles.email]} value={email} onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
          </View>
          <View style={styles.action}>
            <CheckBox value={remember} onValueChange={value => setRemember(value)}/>
          </View>
          <Button title={'Loading'} onPress={Click}/>
        </View>
        <View style={styles.footer} />

      </ImageBackground>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  login: {
  },
  bg: {
    width,
    height,
    padding: 16,
    justifyContent: 'space-between',
  },
  content: {
    gap: 16,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  welcome: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    height: 19,
  },
  title: {
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    height: 28,
  },
  form: {

  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  email: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  action: {

  },
  footer: {

  },
});

export default Login;
