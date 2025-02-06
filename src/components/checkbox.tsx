import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-bouncy-checkbox';
import Selected from '@/assets/img/checkbox/selected.svg';
import SelectedDisable from '@/assets/img/checkbox/selected-disable.svg';
import SubSelected from '@/assets/img/checkbox/sub-selected.svg';
import SubSelectedDisable from '@/assets/img/checkbox/sub-selected-disable.svg';
import Unselected from '@/assets/img/checkbox/unselected.svg';
import UnselectedDisable from '@/assets/img/checkbox/unselected-disable.svg';
import { colors } from '@/styles/color';
import { checkbox } from '@/styles/checkbox';
import { font } from '@/styles/common';

interface CheckBoxProps {
  size?: number;
  isChecked: boolean;
  disabled?: boolean;
  text?: string;
  isDash?: boolean;
  useDash?: boolean;
  fontBold?: boolean;
  onPress: (checked?: boolean) => void;
  onDash?: (dash: boolean) => void;
}

export function AicsCheckbox(
  {
    size = 16,
    isChecked = false,
    disabled = false,
    text = '',
    isDash = false,
    useDash = false,
    fontBold = false,
    onPress,
    onDash = () => {},
  }: CheckBoxProps) {
  const press = () => {
    if (!disabled) {
      if (useDash && isDash) {
        onDash(false);
      } else {
        onPress();
      }
    }
  };
  return (
    <CheckBox
      disabled={disabled}
      isChecked={isChecked}
      size={size}
      onPress={press}
      fillColor={colors.transparent}
      iconStyle={checkbox.icon}
      innerIconStyle={checkbox.icon}
      iconComponent={disabled
        ? (isChecked ? (isDash ? <SubSelectedDisable/> : <SelectedDisable/>) : <UnselectedDisable/>)
        : (isChecked ? (isDash ? <SubSelected/> : <Selected/>) : <Unselected/>)}
      textComponent={!!text && <TouchableOpacity onPress={press}>
        <Text style={[checkbox.text, fontBold && isChecked ? font.bold : font.normal]}>{text}</Text>
      </TouchableOpacity>}
    />
  );
}
