import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { button } from '@/styles/button';

interface ButtonProps {
  text?: string;
  mode?: 'text' | 'filled' | 'outline';
  size?: 'small' | 'middle' | 'big';
  type?: 'primary' | 'dark' | 'light' | 'successful' | 'error' | 'warning';
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onPress?: (() => void) | undefined;
}

export function AicsButton(
  {
    text = '',
    mode = 'filled',
    size = 'middle',
    type = 'primary',
    onPress = undefined,
  }: ButtonProps
) {
  return (
    <TouchableOpacity onPress={onPress} style={[button.base, button[type], button[mode]]}>
      <Text style={[button[size], button[mode]]}>{text}</Text>
    </TouchableOpacity>
  );
}
