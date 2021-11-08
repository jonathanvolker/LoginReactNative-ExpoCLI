import React ,{useEffect} from 'react';
import { StyleSheet , View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler"

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
const Stack = createNativeStackNavigator();

export default function App() {


  return (
   <>
    
    <NavigationContainer >
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="loading" component={LoadingScreen} />
      </Stack.Navigator>

    </NavigationContainer>

   </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
