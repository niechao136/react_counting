import { StyleSheet } from 'react-native';
import { colors } from './color';

export const button = StyleSheet.create({
  base: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    fontSize: 12,
    lineHeight: 24,
    height: 24,
    padding: 0,
    paddingLeft: 12,
    paddingRight: 12,
  },
  middle: {
    fontSize: 14,
    lineHeight: 32,
    height: 32,
    padding: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  big: {
    fontSize: 16,
    lineHeight: 40,
    height: 40,
    padding: 0,
    paddingLeft: 37,
    paddingRight: 37,
  },
  filled: {
    color: colors.white_000,
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
  },
  primary: {
    backgroundColor: colors.primary_600,
    borderColor: colors.primary_600,
    color: colors.primary_600,
  },
  dark: {
    backgroundColor: colors.gray_600,
    borderColor: colors.gray_600,
    color: colors.gray_600,
  },
  light: {
    backgroundColor: colors.white_000,
    borderColor: colors.white_000,
    color: colors.white_000,
  },
  successful: {
    backgroundColor: colors.green_600,
    borderColor: colors.green_600,
    color: colors.green_600,
  },
  error: {
    backgroundColor: colors.red_600,
    borderColor: colors.red_600,
    color: colors.red_600,
  },
  warning: {
    backgroundColor: colors.yellow_600,
    borderColor: colors.yellow_600,
    color: colors.yellow_600,
  },
});
