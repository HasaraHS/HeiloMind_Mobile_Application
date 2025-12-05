import { Image, Pressable, StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '@/components/screenWrapper';
import Typo from '@/components/typo';
import { colors, radius, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import BackButton from '@/components/backButton';
import Input from '@/components/input';
import * as Icons from 'phosphor-react-native';
import Button from '@/components/button';
import { useRouter } from 'expo-router';
import AppAlert from '@/components/appAlert';

const Register = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const nameRef = useRef('');
  const postalCodeRef = useRef('');
  const [isLoading, setOsLoading] = useState(false);
  const router = useRouter();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
   const [alertType, setAlertType] = useState<'success' | 'error' | 'warning'>();

  const showAlert = (type: 'success' | 'error' | 'warning', msg: string): void => {
  setAlertType(type);
  setAlertMessage(msg);
  setAlertVisible(true);
};


  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef.current || !postalCodeRef.current) {
      showAlert('error', 'Please fill all the fields');
      return;
    }

     showAlert('success', `Welcome to Heilo Mind, ${emailRef.current}!`);
  };

  return (
    <ScreenWrapper>
      <AppAlert
        visible={alertVisible}
        type={alertType}
        message={alertMessage}
        onHide={() => setAlertVisible(false)}
      />

      <View style={styles.container}>
        <View style={styles.topRow}>
          <BackButton iconSize={28} color={colors.secondary} />
        </View>

        {/* Centered top image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/signup.png")}
            style={styles.topImage}
            resizeMode="contain"
          />
        </View>

        {/* Transparent Form Card */}
        <View style={styles.formContainer}>
          <View style={styles.form}>
             <Input
             borderColor={colors.secondary}
              placeholder="Enter your username"
              onChangeText={(value) => (nameRef.current = value)}
              icon={
                <Icons.UserCircleIcon
                  size={verticalScale(26)}
                  color={colors.textSecondary}
                />
              }
            />

            <Input
              borderColor={colors.secondary}
              placeholder="Enter your email"
              onChangeText={(value) => (emailRef.current = value)}
              icon={
                <Icons.EnvelopeSimpleIcon
                  size={verticalScale(26)}
                  color={colors.textSecondary}
                />
              }
            />

            <Input
              borderColor={colors.secondary}
              placeholder="Enter your password"
              secureTextEntry
              onChangeText={(value) => (passwordRef.current = value)}
              icon={
                <Icons.LockIcon
                  size={verticalScale(26)}
                  color={colors.textSecondary}
                />
              }
            />

             <Input
              borderColor={colors.secondary}
              placeholder="Enter your postal code"
              onChangeText={(value) => (postalCodeRef.current = value)}
              icon={
                <Icons.MapPinIcon
                  size={verticalScale(26)}
                  color={colors.textSecondary}
                />
              }
            />

            <Button loading={isLoading} onPress={handleSubmit} style={{marginTop: spacingY._10}} color={colors.buttonSecondary}>
              <Typo fontWeight={"700"} color={colors.background} size={20}>
                Sign Up
              </Typo>
            </Button>

            {/* Divider with "or login with" */}
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Typo
                size={14}
                color={colors.textSecondary}
                style={styles.orText}
              >
                or create account with
              </Typo>
              <View style={styles.line} />
            </View>

            {/* Social login icons */}
            <View style={styles.socialContainer}>
              <Pressable style={styles.socialButton}>
                <Icons.GoogleLogoIcon size={28} color={colors.error} />
              </Pressable>
              <Pressable style={styles.socialButton}>
                <Icons.FacebookLogoIcon
                  size={28}
                  color={colors.buttonSecondary}
                />
              </Pressable>
            </View>
          </View>

          {/* Footer inside card */}
          <View style={styles.footer}>
            <Typo size={15}>Already have an account?</Typo>
            <Pressable onPress={() => router.navigate("/(auth)/login")}>
              <Typo size={15} color={colors.secondary} fontWeight={"700"}>
                Sign In
              </Typo>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    
  },
  topImage: {
    width: verticalScale(400),
    height: verticalScale(300),
  },
  topRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacingX._10,
  marginHorizontal: spacingX._20,
},

formContainer: {
  flex: 1,
  width: '100%',
  backgroundColor: colors.background,
  borderTopLeftRadius: radius._30,
  borderTopRightRadius: radius._30,
  paddingVertical: spacingY._25,
  paddingHorizontal: spacingX._30,
  shadowColor: colors.secondary,
  shadowOpacity: 0.3,
  shadowRadius: radius._30,
  shadowOffset: { width: 0, height: -5 },
  elevation: 20,
  marginTop: verticalScale(-60),
  alignSelf: 'center',
},
  form: {
    gap: spacingY._10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacingY._10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textSecondary,
    opacity: 0.3,
  },
  orText: {
    marginHorizontal: spacingX._10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacingX._20,
    marginBottom: spacingY._5,
  },
  socialButton: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderRadius: radius._20,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    elevation: 3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: spacingY._15,
  },
});
