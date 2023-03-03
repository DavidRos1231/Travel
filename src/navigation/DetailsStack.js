import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();
export default function IndexStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="DetailsS" component={DetailsScreen} options={{title:"Detalles"}}/>
            {/*<Stack.Screen name="loginS" component={LoginScreen} options={{title:"LOgin"}}/>*/}
        </Stack.Navigator>
    )
}