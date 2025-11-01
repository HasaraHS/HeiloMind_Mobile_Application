import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';

interface AppAlertProps {
  visible: boolean;
  type?: 'success' | 'error' | 'warning';
  message?: string;
  onHide?: () => void;
}

const AppAlert: React.FC<AppAlertProps> = ({ visible, type = 'error', message = '', onHide }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // auto hide
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => onHide && onHide());
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  const backgroundColor =
    type === 'success'
      ? colors.success
      : type === 'warning'
      ? colors.warning
      : colors.error;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={[styles.alertBox, { backgroundColor }]}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );
};

export default AppAlert;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: verticalScale(40),
    width: '100%',
    alignItems: 'center',
    zIndex: 999,
  },
  alertBox: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
  },
  text: {
    color: colors.textPrimary,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
});
