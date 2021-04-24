import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "./SigninScreen";
import SignUpScreen from "./SignUpScreen";
import SplashScreen from './SplashScreen';




const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name = 'SplashScreen' component={SplashScreen}/>
            <RootStack.Screen name = 'SigninScreen' component={SigninScreen}/>
            <RootStack.Screen name = 'SignUpScreen' component={SignUpScreen}/>

    </RootStack.Navigator>
);

export default RootStackScreen;