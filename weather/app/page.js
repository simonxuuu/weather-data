"use client"
import { useState, useEffect } from "react";
export default function Home() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`;
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [apparentTemp, setApparentTemp] = useState("");
  const [isDay, setIsDay] = useState("");
  const [windSpeed, setWindSpeed] = useState("");



  const getWeather = async () => {
    try {
      const response = await fetch(weatherAPI);
      const data = await response.json();
      console.log("getting weather.")
      console.log(data);
      setTemp(data.current.temperature_2m);
      setHumidity(data.current.relative_humidity_2m);
      setApparentTemp(data.current.apparent_temperature);
      setIsDay(data.current.is_day);
      setWindSpeed(data.current.wind_speed_10m);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setLatitude("37.7749");
    setLongitude("-122.4194");
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude]);


  return (
    <div className="weather">
      <h1>Weather App</h1>
      <h2>Temperature: {temp}</h2>
      <h2>Humidity: {humidity}</h2>
      <h2>Apparent Temperature: {apparentTemp}</h2>
      <h2>Is Day: {isDay}</h2>
      <h2>Wind Speed: {windSpeed}</h2>
    </div>
  );
}
