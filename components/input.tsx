import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { InputProps } from '@/types'
import { colors, radius, spacingX } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const Input = (props: InputProps) => {
  return (
    <View
      style={[
        styles.container,
        { borderColor: props.borderColor || colors.accent }, // 👈 Custom border color
        props.containerStyle && props.containerStyle,
      ]}
    >
      {props.icon && props.icon}

      <TextInput
        style={[
          styles.input,
          props.inputStyle,
        ]}
        placeholderTextColor={colors.textSecondary}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: radius._17,
    borderCurve: 'continuous',
    paddingHorizontal: spacingX._15,
    gap: spacingX._10,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: verticalScale(14),
  },
})
