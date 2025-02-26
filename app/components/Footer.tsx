import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props={
  Gruppo:string,
  Fecha:string
}
const Footer = (props:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Grupo : {props.Gruppo}</Text>
      <Text style={styles.titulo}>Fecha : {props.Fecha}</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: '#C0A16B',
        justifyContent:'space-between',
        alignItems:'stretch',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        paddingHorizontal:15
    },titulo:{
      fontSize:25,
      fontWeight:'bold'}
})