// SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();

    setTimeout(() => {
      navigation.navigate('Feed');
    }, 5000); // 5000 milissegundos = 5 segundos
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <LinearGradient
        colors={['#007bff', '#00bfff']}
        style={styles.gradient}
      >
        <Text style={styles.appName}>Inner</Text>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
