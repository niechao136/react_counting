import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-bouncy-checkbox';
import { startLoading, stopLoading } from '@/stores';
import { button, colors, login } from '@/styles';
import { AicsCheckbox } from '@/components/checkbox';


function Login() {
  const [email, setEmail] = useState(() => '');
  const [password, setPassword] = useState(() => '');
  const [remember, setRemember] = useState(() => true);
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
      <ImageBackground style={login.bg} source={bg}>
        <View style={login.content}>
          <View style={login.header}>
            <Text style={login.welcome}>Welcome</Text>
            <Text style={login.title}>iService Cloud Platform</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={[login.input, login.email]}
              placeholder={'Email'}
              placeholderTextColor={colors.gray_100}
              value={email}
              onChangeText={text => setEmail(text)}/>
            <TextInput
              style={login.input}
              placeholder={'Password'}
              placeholderTextColor={colors.gray_100}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}/>
          </View>
          <View style={styles.action}>
            <CheckBox
              style={{ height: 24 }}
              fillColor={colors.primary_600}
              iconStyle={{ borderRadius: 0 }}
              innerIconStyle={{ borderRadius: 0 }}
              isChecked={remember}
              size={16}
              textComponent={<TouchableOpacity onPress={() => setRemember(!remember)}>
                <Text style={styles.remember}>Remember me</Text>
              </TouchableOpacity>}
              onPress={checked => setRemember(checked)}
            />
            <TouchableOpacity>
              <Text style={styles.forget}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <AicsCheckbox
              isChecked={remember}
              text={'Remember me'}
              onPress={() => setRemember(!remember)}
            />
          </View>
          <TouchableOpacity onPress={Click} style={[button.base, button.primary]}>
            <Text style={[button.big, button.primary]}>Login</Text>
          </TouchableOpacity>
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
    color: '#0b7dc9',
    paddingLeft: 8,
    paddingRight: 8,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 24,
  },
  remember: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    height: 16,
    marginLeft: 8,
  },
  forget: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    height: 24,
  },
  footer: {

  },
});

export default Login;
