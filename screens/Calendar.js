import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import {CalendarList} from 'react-native-calendars';


export default function Calendar() {

  const [dates, setDates] = useState([]);
  console.log(dates)

  function handlePress(date) {

    if (dates.includes(date)) {
      deleteLink(date)
    } else {
      addLink(date)
    }
  }

  function addLink(date) {
    setDates([...dates, date])
  }

  function deleteLink(date) {
    setDates(dates.filter(item => item !== date))
  }


  let obj;

  if (dates.length > 0) {
    obj = Object.assign(...dates.map(date => ({[date]: { 
      customStyles: {
        container: {
          borderRadius: 10, 
          width: "100%",
          backgroundColor: "red",
          // borderWidth: 2, // having a border causes issues with allignment of the date text
          // borderColor: "black",
        },
        text: {
            color: "white"
        }
      }, 
      }})));
  }

  return (
    <View style={{flex: 1}}>
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={false}

        //initialDate={"2025-02-09"}

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
        markedDates={obj}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
