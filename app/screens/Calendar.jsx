import React, {useEffect, useState, memo} from 'react';
import { SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {CalendarList} from 'react-native-calendars';

import "./Calendar.css";


const Calendar = memo(function Calendar({activeChain}) {


  function handlePress(date) {
  }

  /*

  let obj;

  if (dates.length > 0) {
    obj = Object.assign(...dates.map(o => ({[o.date]: { 
      customStyles: {
        container: {
          borderRadius: 20, 
          width: "100%",
          backgroundColor: "red"
        },
        text: {
            color: "white"
          }
        }, 
      }})));
  } 
  */

  return (
    <SafeAreaView class="meow">
    

      <CalendarList

      // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={500}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={500}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={true}

      firstDay={1}
    
      onDayPress={(e) => {
        handlePress(e.dateString);
      }}

      //calendarStyle={{backgroundColor: "#fefe"}}

      //style={{calendarBackground: "#000"}}

      //style={{calendarBackground: "#000"}}

      theme={{
        'stylesheet.calendar-list.main': {
          calendar: {
            paddingLeft: 15, 
            paddingRight: 15,
            backgroundColor: "#fff"
          },
        }
      }}
      
      markingType={"custom"}

      //markedDates={obj}
      />
    </SafeAreaView>
  );
});

export default Calendar;
