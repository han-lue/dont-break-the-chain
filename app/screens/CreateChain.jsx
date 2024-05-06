import React, { Component, useState } from 'react'
import { SafeAreaView, Button, TextInput} from 'react-native';

import { FIRESTORE_DB } from "../../firebaseConfig.js"

import { doc, setDoc} from "firebase/firestore"



export default function CreateChain() {

  const [chainName, setChainName] = useState()

  function createChain() {

    setDoc(doc(FIRESTORE_DB, `chains/`, chainName), {
    }).then(() => {
      console.log("submitted")
    }).catch((error) => {
      console.log(error)
    })

  }

    return (
      <SafeAreaView >
        <TextInput 
        placeholder='Name of the chain' 
        onChangeText={setChainName}
        value={chainName}/>

        <Button title="create" onPress={() => createChain()}/>
      </SafeAreaView>
    )
}

