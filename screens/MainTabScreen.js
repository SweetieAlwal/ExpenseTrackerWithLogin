import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from './Dashboard';
import DetailsScreen from './DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import Home from './Home';
import { COLORS } from '../constants';



const DashboardStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="DashboardStackScreen"
      activeColor={COLORS.white}
      barStyle={{ backgroundColor: COLORS.peach }}
    >
    <Tab.Screen
        name="DashboardStackScreen"
        component={DashboardStackScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={COLORS.black} size={26} />
          ),
        }}
      />
     <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'ExploreScreen',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={COLORS.black} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'ExploreScreen',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={COLORS.black} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={COLORS.black} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="podium-outline" color={COLORS.black} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;

const DashboardStackScreen = ({navigation}) => (
  <DashboardStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: COLORS.peach,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <DashboardStack.Screen name='Dashboard' component={Dashboard} options={{
      title:'Overview',
      headerLeft: () => (
        <Icon.Button name = "ios-menu" size={25}
        backgroundColor= {COLORS.peach} onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      }}/>
      <DashboardStack.Screen name='Home' component={Home}/>
      </DashboardStack.Navigator>
);


const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: COLORS.peach,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <DetailsStack.Screen name='DetailsScreen' component={DetailsScreen} options={{
        headerLeft: () => (
        <Icon.Button name = "ios-menu" size={25}
        backgroundColor= {COLORS.peach} onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      }}/>
      <DetailsStack.Screen name='Home' component={Home}/>
      </DetailsStack.Navigator>
);
