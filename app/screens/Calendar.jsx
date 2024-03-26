import React, {useEffect, useState} from 'react';
import { SafeAreaView} from 'react-native';
import {CalendarList} from 'react-native-calendars';

import { FIRESTORE_DB } from "../../firebaseConfig.js"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { ref, set } from "firebase/database"

export default function Calendar() {

  const [dates, setDates] = useState([]); 

  useEffect(() => {
    const linkRef = collection(FIRESTORE_DB, "dates");

    const subscriber = onSnapshot(linkRef, {
      next: (snapshot) => {
        let links = [];

        snapshot.docs.forEach((doc) => { 
          links.push({
            id: doc.id,
            ...doc.data()
          })
        });
        setDates(links);
      },
    });

    return () => subscriber();
  }, [])


  let doc;

  function handlePress(date) {
    //const ref = doc(FIRESTORE_DB, `dates/${date}`)

    if (dates.includes({date: date})) {
      deleteLink(date);
    } else {
      addLink(date);
    }
  }

  function addLink(date) {

    //set(ref(FIRESTORE_DB, "dates/" + date), {date: date});

    doc = addDoc(collection(FIRESTORE_DB, "dates"), {date: date});
    console.log(doc)
  }

  function deleteLink(date) {
    deleteDoc()
  }

  let obj;

  if (dates.length > 0) {
    obj = Object.assign(...dates.map(o => ({[o.date]: {activeOpacity: .5, dotColor: "purple", selectedColor: "purple", selected: true }})));
  }


  return (
    <SafeAreaView>
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

    
      onDayPress={(e) => {
        handlePress(e.dateString);
      }}

      markingType='default'

      markedDates={obj}
      />
    </SafeAreaView>
  );
};
