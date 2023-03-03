import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function DetailsScreen(props) {
    const {navigation}=props
    const {navigate}=navigation
  return (
    <View>
      <Text>DetailsScreen</Text>
        <Button title='ir a inicio' onPress={()=>navigate("index")}></Button>
        <Button title='ir a informacion' onPress={()=>navigate("info")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})