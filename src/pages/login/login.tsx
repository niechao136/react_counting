import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, Platform, KeyboardAvoidingView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { startLoading, stopLoading } from '@/stores';
import { colors, login } from '@/styles';
import { AicsButton } from '@/components/button';
import { AicsCheckbox } from '@/components/checkbox';


function Login() {
  const { t } = useTranslation();
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={login.login}>
      <ImageBackground style={login.bg} source={bg}>
        <View style={login.content}>
          <View style={login.header}>
            <Text style={login.welcome}>{t('login.welcome')}</Text>
            <Text style={login.title}>{t('login.title')}</Text>
          </View>
          <View>
            <TextInput
              style={[login.input, login.email]}
              placeholder={t('login.email')}
              placeholderTextColor={colors.gray_100}
              value={email}
              onChangeText={text => setEmail(text)}/>
            <TextInput
              style={login.input}
              placeholder={t('login.password')}
              placeholderTextColor={colors.gray_100}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}/>
          </View>
          <View style={login.action}>
            <AicsCheckbox
              isChecked={remember}
              text={t('login.remember')}
              onPress={() => setRemember(!remember)}
            />
            <AicsButton
              mode={'text'}
              text={t('login.forgot')}
            />
          </View>
          <AicsButton
            size={'big'}
            text={t('login.login')}
            onPress={Click}
          />
        </View>
        <View style={login.footer} />

      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default Login;
