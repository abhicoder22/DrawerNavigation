import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import HomeIcon from '../src/assets/home.png';
import ProfileIcon from '../src/assets/user.png';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#a52a2a'}}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcon}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#dc143c' : '#000000',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={ProfileIcon}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#dc143c' : '#000000',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
