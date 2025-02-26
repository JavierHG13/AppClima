import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props={
  Titulo:string,
  nombre:string,
  imagen:any,
  color?:string
}

const Header = (props:Props) => {
  return (
    <View style={[styles.container,{backgroundColor:props.color}]}>
      <View>
        <Image source={props.imagen} style={styles.imagen}/>
      </View>
      <View>
        <Text style={styles.titulo} >{props.Titulo}</Text>
        <Text style={styles.nombre} >{props.nombre}</Text>
      </View>
    </View>
  )
}

export default Header

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
    },
    imagen:{
      height:75,
      width:75,
      borderRadius:38
    },titulo:{
      fontSize:25,
      fontWeight:'bold'
    },nombre:{
      fontSize:18,
      fontWeight:'bold'
    }

})