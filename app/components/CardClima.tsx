import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

 // Card para mostrar el pronóstico diario
export const CardClima = (props: { date: string; maxtemp_c: number; mintemp_c: number; icon: string; text: string; }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.date}>{props.date}</Text>
        <Image source={{ uri: `https:${props.icon}` }} style={styles.icon} />
        <Text style={styles.temp}>
          Max: {props.maxtemp_c}°C - Min: {props.mintemp_c}°C
        </Text>
        <Text>{props.text}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    date: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    temp: {
      fontSize: 16,
      marginVertical: 5,
    },
    icon: {
      width: 64,
      height: 64,
    },
  });