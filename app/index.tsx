import { Image, StyleSheet, View , Text} from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '@/constants/theme';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/(auth)/welcome');
    }, 2000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />

        <Text style={styles.footerText}>Powered by Heilo Mind</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  logo: {
    height: "20%",
    width: "50%",
    resizeMode: 'contain',
  },
  footerText: {
    position: 'absolute',
    bottom: 40, // distance from bottom
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8,
    fontWeight: '500',
  },
});
