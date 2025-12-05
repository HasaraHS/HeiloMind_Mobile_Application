import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router';
import { CaretLeftIcon } from 'phosphor-react-native';
import { verticalScale } from '@/utils/styling';
import { colors, radius } from '@/constants/theme';

const BackButton = ({
    style,
    iconSize = 26,
    color = colors.primary

}: BackButtonProps & { color?: string }) => {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
      <CaretLeftIcon
      size={verticalScale(iconSize)}
      color={color}
      weight="bold"> 
      </CaretLeftIcon>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button: {

        alignSelf: 'flex-start',
        borderRadius: radius._12,
        borderCurve: 'continuous',
        padding: 5,
        marginTop: 5
    }
})