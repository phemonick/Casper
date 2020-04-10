import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import createStyles from './styles';
import React from 'react';

export default function Button({
  text,
  onPress,
  textStyle,
  containerStyle,
  isOutlined,
  isActive,
}) {
  const styles = createStyles({isActive, isOutlined});
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}
