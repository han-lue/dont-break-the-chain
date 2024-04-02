import 'react-native-gesture-handler';

import React, {createContext, useState} from 'react';
import { SafeAreaView, Text, Button} from 'react-native';

import {createDrawerNavigator, DrawerItem} from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';

import Calendar from "./app/screens/Calendar.jsx"
import CreateChain from './app/screens/CreateChain.jsx';

const Drawer = createDrawerNavigator();


export default function App() {

  const [chains, setChains] = useState(["gym", "read"]);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {
          chains.map(chain => 
          <Drawer.Screen name={chain}>
            {(props) => <Calendar {...props} activeChain={chain} />}
          </Drawer.Screen>
          )
        }


        <Drawer.Screen name='Create New' component={CreateChain}></Drawer.Screen>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

