import 'react-native-gesture-handler';

import React, {createContext, useState, useEffect} from 'react';
import { SafeAreaView, Text, Button, View} from 'react-native';

import {createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"

export default function CustomDrawer(props) {

  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={{flex:1, alignItems: "center"}}>
      </View>

    </View>
    )
};