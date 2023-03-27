import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './src/Profile';
import Toptab from './src/Toptab';
import Customdrawer from './src/customdrawer';
import {NavigationContainer} from '@react-navigation/native';
import messages from './src/messages';
import {Image} from 'react-native';
import Setting from './src/settings';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Toptab"
        drawerContent={props => <Customdrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#a83ea2',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="Toptab"
          component={Toptab}
          options={{
            drawerIcon: ({color}) => (
              <Image
                source={require('./src/assets/home.png')}
                style={{height: 22, width: 22, tintColor: color}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({color}) => (
              <Image
                source={require('./src/assets/user.png')}
                style={{height: 22, width: 22, tintColor: color}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Messages"
          component={messages}
          options={{
            drawerIcon: ({color}) => (
              <Image
                source={require('./src/assets/messenger.png')}
                style={{height: 22, width: 22, tintColor: color}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Setting}
          options={{
            drawerIcon: ({color}) => (
              <Image
                source={require('./src/assets/setting.png')}
                style={{height: 22, width: 22, tintColor: color}}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
