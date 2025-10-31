import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'
import { colors } from '@/constants/theme';

const {height} = Dimensions.get('window');

const ScreenWrapper = ({style, children}: ScreenWrapperProps) => {
    let paddingTop = Platform.OS === 'android' ? height * 0.06 : 50;
  return (
    <View style={[{
        paddingTop,
        flex: 1,
        backgroundColor: colors.background,
    },style]}>

      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})