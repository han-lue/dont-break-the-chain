import React, {useState} from 'react';
import { SafeAreaView, Text} from 'react-native';

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import Calendar from "./app/screens/Calendar.jsx"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="calendar" component={Calendar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
