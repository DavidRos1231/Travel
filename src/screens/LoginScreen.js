import {View, Text, StyleSheet} from 'react-native'
import React from "react";
import {Image} from 'react-native-elements'
import {useNavigation} from "@react-navigation/native";

export default function LoginScreen(){

    const navigation = useNavigation()
    const routerRegister=()=>{
        navigation.navigate("registerS")
    }
    return(
        <View>
            <Image
                source={require("../assets/img/img.jpg")}
                style={styles.logo}
            />
            <Text>Formulario de login</Text>
            <View>
                <Text onPress={routerRegister}>Registrate</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height:150,
        resizeMode:"contain",
        marginTop:30
    }
})