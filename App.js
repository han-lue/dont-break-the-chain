import 'react-native-gesture-handler';

import React, {createContext, useState, useEffect} from 'react';
import { SafeAreaView, Text, Button} from 'react-native';

import {createDrawerNavigator, DrawerItem} from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';

import Calendar from "./app/screens/Calendar.jsx"
import CreateChain from './app/screens/CreateChain.jsx';

import CustomDrawer from "./app/components/CustomDrawer.jsx"

import Ionicons from "react-native-vector-icons/Ionicons"

const Drawer = createDrawerNavigator();


export default function App() {

  const [chains, setChains] = useState([{id: "meow"}, {id: "rawr"}]);

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={props => <CustomDrawer{...props}/>}
      screenOptions={{
        headerShown: true
    }} 
      >
        {
          chains.map(chain => 
          <Drawer.Screen name={chain.id} options={{
            headerStyle: {
              backgroundColor: '#fff'
            },
            drawerIcon: () => (
              <Ionicons name="ellipsis-horizontal-outline" size={20} onPress={()=> openOptions(chain.id)}/>
            )
          }}>
            {(props) => <Calendar {...props} activeChain={chain.id} />}
          </Drawer.Screen>
          )
        }

        <Drawer.Screen name='Create New' component={CreateChain} options={{headerStyle: {}}}
            ></Drawer.Screen>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

