import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients } from '../colors';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={gradients.primary}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <LinearGradient
            colors={['#60A5FA', '#3B82F6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoBox}
          >
            <View style={styles.logoContent}>
              <Text style={styles.logoText}>W</Text>
              <Text style={styles.leaf}>🌱</Text>
            </View>
          </LinearGradient>
        </View>

        {/* App Name */}
        <Text style={styles.appName}>WASTE WARRIOR</Text>

        {/* Tagline */}
        <Text style={styles.tagline}>Track. Reduce. Save.</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 32,
  },
  logoBox: {
    width: 128,
    height: 128,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    // Shadow for Android
    elevation: 10,
  },
  logoContent: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 70,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  leaf: {
    fontSize: 30,
    position: 'absolute',
    top: -8,
    right: -12,
  },
  appName: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 18,
    color: '#DBEAFE',
    fontWeight: '500',
    letterSpacing: 1.5,
  },
});

export default SplashScreen;
