import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'
import {Overlay} from 'react-native-elements'

export default function Loading(props) {
    const {visible, text} = props;
    return (
        <Overlay overLayStyle={styles.overlay} isVisible={visible}>
            <View style={styles.viewLoad}>
                <ActivityIndicator size="large" color="gray"/>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}

Loading.defaultProps = {
    visible : false
}

const styles = StyleSheet.create({
    overlay:{
        height: 100,
        width:200,
        backgroundColor: "#fff",
        borderColor: "#od5bd7",
        borderWidth: 2,
        borderRadius: 8,

    },
    viewLoad:{
        alignItems: "center",
        justifyContent: "center"

    },
    text:{

    }
})