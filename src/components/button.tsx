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
  onPress?: () => void;
}

export function AicsButton(
  {
    text = '',
    mode = 'filled',
    size = 'middle',
    type = 'primary',
    onPress = () => {},
  }: ButtonProps
) {
  return (
    <TouchableOpacity onPress={() => onPress} style={[button.base, button.primary]}>
      <Text style={[button[size], button[mode]]}>Login</Text>
    </TouchableOpacity>
  );
}
