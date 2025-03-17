import 'react-native-gesture-handler';

import React, {createContext, useState, useEffect} from 'react';
import { SafeAreaView, Text, Button, View} from 'react-native';

import {createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"

import CreateChain from '../screens/CreateChain.js';
import Calendar from '../screens/Calendar.js';

export default function CustomDrawer(props) {

  const [chains, setChains] = useState(["gym", "reading", "english"]);

  return (
    <View style={{flex: 1,  flexDirection: "column-reverse"}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

    </View>
    )
};