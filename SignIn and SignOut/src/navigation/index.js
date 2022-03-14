import React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/*import {createStackNavigator} from '@react-navigation/stack';*/

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

import OnBoardScreen from '../screens/OnBoardScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AccountScreen from '../screens/AccountScreen';
import Map from '../screens/Map';
import HMap from '../screens/HMap';
import Help from '../screens/Help';
import Favourite from '../screens/Favourite';

const Stack = createNativeStackNavigator();

/*const Stack2 = createStackNavigator();*/

const Navigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} /> 
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="HMap" component={HMap} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Favourite" component={Favourite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
