import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from './screens/FeedScreen';
import SplashScreen from './screens/SplashScreen';
import PostScreen from './screens/PostScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Splash" } screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Feed" component={FeedScreen} />
              <Stack.Screen name="Post" component={PostScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
