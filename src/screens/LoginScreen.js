import {View, Text, StyleSheet} from 'react-native'
import React from "react";
import {Image} from 'react-native-elements'
import {useNavigation} from "@react-navigation/native";
import LoginForm from '../components/account/LoginForm';


export default function LoginScreen(){

    const navigation = useNavigation()
    const routerRegister=()=>{
        navigation.navigate("registerS")
    }
    return (
       <View>
          <Image
             source={require("../assets/img/img.jpg")}
             style={styles.logo}
          />

          <Text>Formulario de login</Text>
          <View style={styles.contenForm}>
             <LoginForm />
             <Text style={styles.text}>
                Aun no tienes cuenta?
                <Text style={styles.textBtn} onPress={routerRegister}>
                   {" "}
                   Registrate
                </Text>
             </Text>
          </View>
       </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height:150,
        resizeMode:"contain",
        marginTop:30
    },
    contenForm:{
        marginHorizontal:30
    },
    text:{ 
        marginTop: 15,
        marginHorizontal: 10
    },
    textBtn:{
        fontFamily:"bold",
        color:"#0D5BD7"
    }
})