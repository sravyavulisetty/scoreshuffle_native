import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

interface CustomButtonProps{
    children: any,
    handlePress: () => void,
}
const CustomButton = ({children, handlePress}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
        {children}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
        button:{
            backgroundColor: "black",
            color: "white",
            padding: 10
        },
})
