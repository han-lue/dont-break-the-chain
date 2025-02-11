import {useState} from 'react';
import { View, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

import Calendar from "./screens/Calendar.js"
import CreateChain from './screens/CreateChain.js';

import CustomDrawer from "./components/CustomDrawer.js"

import Ionicons from "react-native-vector-icons/Ionicons"

const Drawer = createDrawerNavigator();

export default function App() {

  const [chains, setChains] = useState(["gym", "reading", "english"]);



  function openOptions(chainId) { //right now it deletes the chain immediately, without any options
    console.log(chainId);

    setChains(chains.filter(item => item !== chainId))
  }
  
  
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
          <Drawer.Screen name={chain} options={{
            headerStyle: {
              backgroundColor: '#fff'
            },
            drawerIcon: () => (
              <Ionicons name="ellipsis-horizontal-outline" size={20} onPress={()=> openOptions(chain)}/>
            )
          }}>
            {(props) => <Calendar {...props} activeChain={chain} />}
          </Drawer.Screen>
          )
        }

        <Drawer.Screen name='Create New' component={CreateChain} options={{headerStyle: {}}}></Drawer.Screen>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
