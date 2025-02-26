import { useEffect, useState } from "react";
import { WeatherData } from "../types/WheaterData";

//Este es un hook personalizado que nos ayuda a separar un poco la logica
export const useWeather = () => {
    const [pronosticos, setPronosticos] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const dias = 7; //Mostramos los pronosticos para los siguientes 7 dias

        const CargaDatos = async () => {
            setLoading(true);
            try {
                const respuesta = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=347a0c7abd684df3924132339241110&q=21.1386368,-98.4088576&days=${dias}`);

                if (!respuesta.ok) {
                    throw new Error("Error en la respuesta de la API");
                }

                const datos: WeatherData = await respuesta.json();
                setPronosticos(datos);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            } finally {
                setLoading(false);
            }
        }

        CargaDatos();
    }, []); 

    return { pronosticos, loading };
};
