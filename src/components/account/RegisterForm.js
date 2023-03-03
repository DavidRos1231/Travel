import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Icon, Input } from 'react-native-elements'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

export default function RegisterForm() {
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
    onSubmit: (formValue) => {
      console.log(formValue)
    },
    
  })
  return (

    <View style={styles.viewForm}>
    <Formik initialVaues={{email: '', password: '', repeatPassword: ''}}>
      </Formik>
    <Input
        containerStyle={styles.input}  placeholder='Correo electronico'
        rightIcon={<Icon type="material-community" name="at" iconStyle={styles.icon}/>}
        onChangeText={text => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
    />
    <Input
        containerStyle={styles.input} placeholder='Contraseña' secureTextEntry={true}
        rightIcon={<Icon type="material-community" name="eye-outline" iconStyle={styles.icon}/>}
        onChangeText={text => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
    />
    <Input
        containerStyle={styles.input} placeholder='Repetir contraseña' secureTextEntry={true}
        rightIcon={<Icon type="material-community" name="eye-outline" iconStyle={styles.icon}/>}
        onChangeText={text => formik.setFieldValue('repeatPassword', text)}
        errorMessage={formik.errors.repeatPassword}
    />
    <Button title={"Registrarse"} containerStyle={styles.containerBtn} 
    buttonStyle={styles.btn} onPress={formik.handleSubmit}/>
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
