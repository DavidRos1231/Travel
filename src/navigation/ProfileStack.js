import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
export default function IndexStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="ProfileS" 
            component={ProfileScreen} 
            options={{title:"Perfil"}}/>
            {/*<Stack.Screen name="loginS" component={LoginScreen} options={{title:"LOgin"}}/>*/}
        </Stack.Navigator>
    )
}