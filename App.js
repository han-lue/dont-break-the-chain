import 'react-native-gesture-handler';

import React, {createContext, useState, useEffect} from 'react';
import { SafeAreaView, Text, Button} from 'react-native';

import {createDrawerNavigator, DrawerItem} from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';

import Calendar from "./app/screens/Calendar.jsx"
import CreateChain from './app/screens/CreateChain.jsx';

import { collection, onSnapshot} from "firebase/firestore"

import { FIRESTORE_DB } from "./firebaseConfig.js"

import CustomDrawer from "./app/components/CustomDrawer.jsx"

import Ionicons from "react-native-vector-icons/Ionicons"

const Drawer = createDrawerNavigator();


export default function App() {

  const [chains, setChains] = useState([]);

  useEffect(() => {
    const ref = collection(FIRESTORE_DB, "chains");

    const subscriber = onSnapshot(ref, {
      next: (snapshot) => {
        let array = [];

        snapshot.docs.forEach((doc) => { 
          let id = doc.id;
          console.log(id)
          array.push({
            id
          })
        });
        setChains(array);
      },
    });

    return () => subscriber();
  },[])

  function openOptions() {console.log("it works abibi")}

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
            drawerIcon: () => (
              <Ionicons name="ellipsis-horizontal-outline" size={20} onPress={()=> openOptions()}/>
            )
          }}>
            {(props) => <Calendar {...props} activeChain={chain.id} />}
          </Drawer.Screen>
          )
        }

        <Drawer.Screen name='Create New' component={CreateChain}></Drawer.Screen>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

