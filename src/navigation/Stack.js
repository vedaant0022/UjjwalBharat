import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Onboarding/Splash';
import { NavigationContainer } from '@react-navigation/native';
import Getstarted from '../screens/Onboarding/Getstarted';
import PhoneNumber from '../screens/Onboarding/PhoneNumber';
import OTP from '../screens/Onboarding/OTP';
import Createacc from '../screens/Onboarding/Createacc';
import Tab from './Tab';

const Stack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='GetStarted'
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Tab" component={Tab}/>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="GetStarted" component={Getstarted}/>
        <Stack.Screen name="Phone" component={PhoneNumber}/>
        <Stack.Screen name="OTP" component={OTP}/>
        <Stack.Screen name="Createacc" component={Createacc}/>
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stack
