import {Button, StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
//import DetailsStack from "../navigation/DetailsStack";
import {useState} from "react";
import LoginScreen from "./LoginScreen";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Loading from "../components/common/Loading";

export default function IndexScreen(props) {
    const {navigation}=props
    const {navigate}=navigation
    const [session, setSession]=useState(null)
    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            setSession(user ? true : false)
        })
        setSession(true)
    },[])
    if (session===null){
        return <Loading text={"Validando"} visible={true}  />
    }
    return session?(
        <View>
            <Text>IndexScreen</Text>
            <Button title='ir a detalles' onPress={()=>navigate("details",{screen:"DetailsS"})}></Button>
            <Button title='ir a info' onPress={()=>navigate("info")}></Button>
            <Button title='ir a login' onPress={()=>navigate("details",{screen:"loginS"})}></Button>
        </View>
    ) : <LoginScreen></LoginScreen>
}

const styles = StyleSheet.create({})