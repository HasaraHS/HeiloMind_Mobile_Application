import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CustomButtonProps } from '@/types';
import { colors, radius } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import Loading from './loading';

const Button = ({
  style,
  onPress,
  loading = false,
  children,
  color = colors.buttonPrimary,
}: CustomButtonProps & { color?: string }) => {
  
  if (loading) {
    return (
      <View
        style={[
          styles.button,
          style,
          { backgroundColor: colors.buttonSecondary }, 
        ]}>
        <Loading />
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        style,
        { backgroundColor: color }, 
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonPrimary, 
    borderRadius: radius._17,
    borderCurve: 'continuous',
    height: verticalScale(52),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
