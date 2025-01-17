import { StyleSheet } from 'react-native';
import { colors } from './color';
import { width, height } from './length';

export const login = StyleSheet.create({
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
    color: colors.gray_900_dark,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    height: 19,
  },
  title: {
    color: colors.gray_900_dark,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    height: 28,
  },
  input: {
    color: colors.primary_600,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray_100,
    backgroundColor: colors.white_000,
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
  checkbox: {

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
});
