import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from "./Screen/Home"
export default function App() {
  return (
    <View style={styles.container}> 
      <Text>SJDF  </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink'
    }
    
})