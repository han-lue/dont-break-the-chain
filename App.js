import React, {createContext, useState} from 'react';
import { SafeAreaView, Text} from 'react-native';

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import Calendar from "./app/screens/Calendar.jsx"

import Meow from "./app/screens/Meow.jsx"

const Stack = createNativeStackNavigator();

export const GlobalContext = createContext();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="calendar" component={Calendar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};






export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};