import {useState} from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

import CalendarScreen from "./screens/Calendar.js"
//import CreateChainScreen from "./screens/CreateChain.js"

const Drawer = createDrawerNavigator();

export default function App() {

  const [chains, setChains] = useState(["gym", "reading", "english"]);
  
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Calendar">
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
