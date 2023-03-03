import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { getAuth, signOut } from 'firebase/auth'
import { async } from '@firebase/util'
import {useNavigation} from "@react-navigation/native";

export default function ProfileScreen() {
    const navigation = useNavigation();
    
    const cerrarSesion = async ()=>{
        const auth = getAuth();
        await signOut (auth);
        navigation.navigate("indexS")

    }
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button 
      title="cerrar sesion"
      onPress={cerrarSesion}
      buttonStyle={styles.title}
      titleStyle={styles.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#fff",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:"#e3e3e3",
        borderBottomColor: "#e3e3e3",
        marginTop: 30,
        paddingVertical: 30
    },
    title:{
        backgroundColor:"#0D5BD7"
    }
})