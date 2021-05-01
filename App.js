import React, { useEffect } from 'react';
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
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from './constants';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { withAuthenticator } from 'aws-amplify-react-native'

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
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
          return {
            ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
          }
      case 'REGISTER':
            return {
              ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
            }
    }
  }

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  )

  const authContext = React.useMemo(()=> ({
    signIn: async(userName, password) => {
      // setUserToken('djfjfs');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if(userName == 'user' && password == 'pass'){
        try{
          userToken = 'dfgdfg'
          await AsyncStorage.setItem('userToken', userToken)
          console.log('userToken: ', userToken)

        } catch(e){
          console.log(e)
        }
      } 
      else {
        console.log('userToken: ',userToken);
        console.log("Logginn failed")
      }
      dispatch({type: 'LOGIN',id: userName, token: userToken})
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try{
        await AsyncStorage.removeItem('userToken')
        console.log('userToken: '+null+' signed out');
      } catch(e){
        console.log("sign out failed")
        console.log(e)
      }
      dispatch({type: 'LOGOUT'})
    },
    signUp: () => {
      // setUserToken('djfjfs');
      // setIsLoading(false);
    }
  }),[]);
  
  useEffect(()=>{
    setTimeout(async()=>{
      // setIsLoading(false);
      let userToken;
      userToken = null
      try{
        userToken = await AsyncStorage.getItem('userToken')
        console.log('userToken: ',userToken);
      } catch(e){
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    },1000)
  },[]);


  if(loginState.isLoading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
        <ActivityIndicator size="large" color={COLORS.red}/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer 
    theme = {theme}
    >
    {loginState.userToken !== null ? (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarksScreen" component={BookmarksScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />

      </Drawer.Navigator>)
      :     <RootStackScreen/>

      }
    </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default withAuthenticator(App);