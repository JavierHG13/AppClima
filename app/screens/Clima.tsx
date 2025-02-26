// src/screens/ClimaView.tsx
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useWeather } from '../Hooks/useWheater';
import { Loader } from '../components/Loader';
import { CardClima } from '../components/CardClima';

const ClimaView: React.FC = () => {
  const { pronosticos, loading } = useWeather();


  // Pantalla con la lista de pronósticos
  const LoadScreen = () => {
    return (
      <View style={styles.content}>

        <View style={styles.locationContainer}>

          <Text style={styles.location}>

            {pronosticos?.location.name}, {pronosticos?.location.region}

          </Text>
          <Text style={styles.country}>{pronosticos?.location.country}</Text>
        </View>

        <FlatList
          data={pronosticos?.forecast.forecastday}
          renderItem={({ item }) => (

            <CardClima //Llmamos al componente card
              date={item.date}
              maxtemp_c={item.day.maxtemp_c}
              mintemp_c={item.day.mintemp_c}
              icon={item.day.condition.icon}
              text={item.day.condition.text}
            />
          )}
          keyExtractor={(item) => item.date}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Clima de la semana</Text>
      {loading ? <Loader /> : LoadScreen()}
    </View>
  );
};

export default ClimaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  content: {
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  location: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  country: {
    fontSize: 18,
    color: '#888',
  }
});
