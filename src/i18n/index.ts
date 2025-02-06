import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';
import en_US from './en-US.json';
import ja_JP from './ja-JP.json';
import ko_KR from './ko-KR.json';
import zh_CN from './zh-CN.json';
import zh_TW from './zh-TW.json';

const resources = {
  'en-US': {
    translation: en_US,
  },
  'ja-JP': {
    translation: ja_JP,
  },
  'ko-KR': {
    translation: ko_KR,
  },
  'zh-CN': {
    translation: zh_CN,
  },
  'zh-TW': {
    translation: zh_TW,
  },
};

const locale = Localization.getLocales()[0].languageTag;

i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
