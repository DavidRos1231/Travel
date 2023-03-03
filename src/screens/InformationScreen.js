import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function InformationScreen(props) {
    const {navigation}=props
    const {navigate}=navigation
  return (
    <View>
      <Text>InformationScreen</Text>
        <Button title='ir a inicio' onPress={()=>navigate("index")}></Button>
        <Button title='ir a detalles' onPress={()=>navigate("details")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})