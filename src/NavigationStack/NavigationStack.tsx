import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Pages/LoginScreen';
import BottomTabMenu from './BottomTabMenu';
import SplashScreen from '../Pages/SplashScreen';

const navigationOptions = {
  safeAreaInset: {bottom: 'always', top: 'always'},
  showLabel: true,
  style: {
    backgroundColor: 'lightgray',
    height: 45,
  },
  labelPosition: 'below-icon',
  headerShown: false,
};
const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={navigationOptions}
      />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </Stack.Navigator>
  );
}

function SplashScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={navigationOptions}
      />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </Stack.Navigator>
  );
}

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreenStack">
        <Stack.Screen
          name="SplashScreenStack"
          component={SplashScreenStack}
          options={navigationOptions}
        />
        <Stack.Screen
          name="AppStack"
          component={BottomTabMenu}
          options={navigationOptions}
        />
        <Stack.Screen
          name="LoginStack"
          component={LoginStack}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
