import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input, Icon} from 'react-native-elements'

export default function FormulariodeLogin() {
    const [password, setpassword] = useState(false)
    const showPass = () =>{
        setpassword(!password)
    }
  return (
    <View style={styles.viewForm}>
      <Input 
      containerStyle={styles.input}  placeholder='Correo electronico'
      rightIcon={<Icon type="material-community" name="at"
      iconStyle={styles.icon}/>}
      />
      <Input
      containerStyle={styles.input}
        placeholder='Contraseña' 
        secureTextEntry={password?false:true}
        rightIcon={<Icon type="material-community" name={password?"eye-off-outline":"eye-outline"}
        iconStyle={styles.icon}
        onPress={showPass}  />
        }
        />
      <Button
      title={"Registrarse"} containerStyle={styles.containerBtn} 
      buttonStyle={styles.btn}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    Input: {
        width: '100%',
        marginTop: 20
    },
    viewForm: {
        marginRight: 40,
        
    },
    icon: {
        color: '#c1c1c1'
    },
    btn: {
        backgroundColor: '#00a680'
    },
    containerBtn: {
        marginTop: 20,
        width: '95%'
    }
})