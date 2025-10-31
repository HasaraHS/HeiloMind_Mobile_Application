import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/screenWrapper';
import { colors, spacingX, spacingY } from '@/constants/theme';
import Typo from '@/components/typo';
import { verticalScale } from '@/utils/styling';
import Button from '@/components/button';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = () => {
  return (
    <ScreenWrapper>
      {/* Background image covering full screen */}
      <ImageBackground
        source={require('../../assets/images/welcome-screen.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Gradient overlay for modern look */}
        <LinearGradient
          colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.overlay}>
          {/* Top right Sign In button */}
          <Animated.View entering={FadeIn.duration(800).springify()}>
            <TouchableOpacity style={styles.loginButton}>
              <Typo fontWeight={'600'} size={16} color={colors.surface}>
                Sign In
              </Typo>
            </TouchableOpacity>
          </Animated.View>

          {/* Centered main content */}
          <Animated.View
            entering={FadeInUp.duration(1000).delay(200).springify()}
            style={styles.middleSection}
          >
            <Typo
              size={42}
              fontWeight={'800'}
              color={colors.surface}
              style={{ textAlign: 'center' }}
            >
              Welcome to HeiloMind
            </Typo>

            <Typo
              size={18}
              color={colors.textSecondary}
              style={{ textAlign: 'center', marginTop: spacingY._10 }}
            >
              Empowering Smart Energy Decisions
            </Typo>
          </Animated.View>

          {/* Footer section */}
          <Animated.View
            entering={FadeInDown.duration(1200).delay(400).springify().damping(18)}
            style={styles.footer}
          >
            <Button style={styles.getStartedButton}>
              <Typo size={20} color={colors.background} fontWeight={'700'}>
                Get Started
              </Typo>
            </Button>

            <Typo
              size={14}
              color={colors.textSecondary}
              style={{ textAlign: 'center', marginTop: verticalScale(10) }}
            >
              Discover smarter ways to manage your solar energy.
            </Typo>
          </Animated.View>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacingX._25,
    paddingTop: spacingY._20,
    paddingBottom: spacingY._25,
  },
  loginButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 25,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    marginBottom: spacingY._20,
  },
  getStartedButton: {
    width: '85%',
    borderRadius: 30,
    paddingVertical: verticalScale(14),
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
});
