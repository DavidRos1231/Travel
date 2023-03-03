import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Button, Icon, Input } from 'react-native-elements'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { async } from '@firebase/util'
import { Toast } from 'react-native-toast-message'
import {useNavigation} from '@react-navigation/native'

export default function RegisterForm() {
  const navigation=useNavigation()
  const [password,setPassword]=useState(false)
  const [reppassword,repsetPassword]=useState(false)
  const formik = useFormik({
    initialValues:
    {
      email: '',
      password: '',
      repeatPassword: ''
    },
    validationSchema:Yup.object({
      email: Yup.string().email("Correo no valido").required("Email es obligatorio"),
      password: Yup.string().required("contraseña obligatoria"),
      repeatPassword: Yup.string().required("contaseña obligatoria").oneOf([Yup.ref('password')], "Las contraseñas no coinciden")
    }),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        const auth=getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        )
        //navigator.navigate("indexS")
        navigation.goBack();
      }catch(error){
        Toast.show({
          type:"error",
          position:"bottom",
          text1:"Error al registrar "
        })
      }
    },
    
  })


  const showPass = () =>{
      setPassword(!password)
    }
    const showRepPass = () =>{
      repsetPassword(!reppassword)
    }
  return (
    
    <View style={styles.viewForm}>
    <Formik initialVaues={{email: '', password: '', repeatPassword: ''}}>
      </Formik>
    <Input
        containerStyle={styles.input}  placeholder='Correo electronico'
        rightIcon={<Icon type="material-community" name="at"
        iconStyle={styles.icon}/>}
        onChangeText={text => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
    />
    <Input
        containerStyle={styles.input}
        placeholder='Contraseña' 
        secureTextEntry={password?false:true}
        rightIcon={<Icon type="material-community" name={password?"eye-off-outline":"eye-outline"}
        iconStyle={styles.icon}
        onPress={showPass}  />
      }
        onChangeText={text => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
    />
    <Input
        containerStyle={styles.input} placeholder='Repetir contraseña'
        secureTextEntry={reppassword?false:true}
        rightIcon={<Icon type="material-community" name={reppassword?"eye-off-outline":"eye-outline"}
        iconStyle={styles.icon}
        onPress={showRepPass}  />
      }
        onChangeText={text => formik.setFieldValue('repeatPassword', text)}
        errorMessage={formik.errors.repeatPassword}
    />
    <Button title={"Registrarse"} containerStyle={styles.containerBtn} 
    buttonStyle={styles.btn} onPress={formik.handleSubmit}
    Loading={formik.isSubmitting}
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
