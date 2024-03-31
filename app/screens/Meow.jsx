import React, { Component } from 'react'
import { SafeAreaView, StyleSheet} from 'react-native';


import { Calendar, CalendarList } from 'react-native-calendars';

export default function Meow() {

    return (
      <SafeAreaView style={style.container}>


        <CalendarList
        theme={style.calendar} 
                
        />
        
        
      </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    calendar: {
        backgroundColor: "#fefe"
    }

})