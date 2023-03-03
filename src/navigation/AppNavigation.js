import React from 'react'
import { Icon } from 'react-native-elements';
import InformationScreen from "../screens/InformationScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import IndexStack from "./IndexStack";
import DetailsStack from "./DetailsStack";

/*


/!*Navegacion con drawer*!/
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="index" component={IndexScreen} options={{title: "Inicio"}} />
            <Drawer.Screen name="details" component={DetailsScreen} options={{title: "Detalles"}} />
            <Drawer.Screen name="info" component={InformationScreen} options={{title: "Informacion"}} />
        </Drawer.Navigator>
    );
}


*/

/*Navegacion con uso de Tabs*/

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({route})=>({headerShown:false, tabBarActiveTintColor:"purple",
            tabBarInactiveTintColor:"black",
            tabBarIcon:({color, size})=>showIcons(route, color, size)})}>
            <Tab.Screen name="index" component={IndexStack} options={{title: "Inicio"}} />
            <Tab.Screen name="details" component={DetailsStack} options={{title: "Detalles"}} />
            <Tab.Screen name="info" component={InformationScreen} options={{title: "Informacion", headerShown:true}} />
        </Tab.Navigator>
    );
}

function showIcons(route,color,size){
    let icono;
    if(route.name=="index"){
        icono="home-circle"
    }

    if(route.name=="details"){
        icono="cog"
    }

    if(route.name=="info"){
        icono="information-outline"
    }

    return(
        <Icon type='material-community' name={icono}
              color={color} size={size}/>
    )
}

/*Uso de navegacion con Stack*/

/*
const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="index" component={IndexScreen} options={{title:"Inicio"}}/>
          <Stack.Screen name="details" component={DetailsScreen} options={{title:"Detalles"}}/>
          <Stack.Screen name="info" component={InformationScreen} options={{title:"Informacion"}}/>
      </Stack.Navigator>
  )
}*/
