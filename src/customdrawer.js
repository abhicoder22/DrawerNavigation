import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Customdrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../src/assets/background.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../src/assets/boy.png')}
            style={{height: 90, width: 90, borderRadius: 10, marginBottom: 10}}
          />
          <Text style={{color: '#fff', fontSize: 16, marginStart: 10}}>
            Abhishek
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff', marginStart: 10}}>250 coins</Text>
            <Image
              style={{height: 10, width: 10}}
              source={require('../src/assets/dollar.png')}
            />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 22, width: 22}}
              source={require('./assets/share.png')}
            />
            <Text style={{fontSize: 15, marginLeft: 5}}>Tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 22, width: 22}}
              source={require('./assets/logout.png')}
            />
            <Text style={{fontSize: 15, marginLeft: 5}}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Customdrawer;
