import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'
import { colors } from '@/constants/theme';

const {height} = Dimensions.get('window');

const ScreenWrapper = ({ style, children, noPadding }: ScreenWrapperProps & { noPadding?: boolean }) => {
    let paddingTop = Platform.OS === 'android' ? height * 0.005 : height * 0.04;
  return (
    <View style={[{
        paddingTop: noPadding ? 0 : paddingTop,
        flex: 1,
        backgroundColor: colors.background,
    },style]}>

      <StatusBar barStyle="light-content" 
      translucent = {noPadding} //overlay status bar if full screen 
      backgroundColor={noPadding? 'transparent' : colors.background}/>
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})