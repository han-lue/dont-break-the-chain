import React, { Component, useState } from 'react'
import { SafeAreaView, Button, TextInput} from 'react-native';


export default function CreateChain() {

  const [chainName, setChainName] = useState()

  function createChain() {


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

