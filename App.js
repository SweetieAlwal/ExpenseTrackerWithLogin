import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import BookmarksScreen from './screens/Bookmarks';
import SupportScreen from './screens/SupportScreen';
import RootStackScreen from './screens/RootStackScreen';



const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () =>{
  return (
    <NavigationContainer 
    theme = {theme}
    >
    <RootStackScreen/>
    {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarksScreen" component={BookmarksScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />

      </Drawer.Navigator> */}
    </NavigationContainer>
  )
}
export default App;