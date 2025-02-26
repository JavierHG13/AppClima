
export type WeatherData = { //Lo creamos aqui para realizarlo reutilizable
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
        feelslike_c: number;
        wind_kph: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    forecast: {
        forecastday: {
            date: string;

            day: {
                maxtemp_c:number,
                mintemp_c:number
                condition: {
                    text: string;
                    icon: string;
                };
            };
        }[];
    };
};
