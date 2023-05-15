async function getWeatherData(place) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=03184162d719411281d61101230405&q=${place}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  //const countryName = weatherData["location"]["country"];
  //const placeName = weatherData["location"]["name"];
  //const time = weatherData["location"]["localtime"];
  const {
    location: { country: countryName, name: placeName, localtime: time },
    current: {
      condition: { text: condition },
      humidity: humidityInPercentage,
      pressure_mb: pressureInMb,
      temp_c: tempInCelsius,
      temp_f: tempInFahrenheit,
      wind_kph: windSpeedInKph,
    },
  } = weatherData;
  const requiredWeatherData = {
    countryName,
    placeName,
    time,
    condition,
    humidityInPercentage,
    pressureInMb,
    tempInCelsius,
    tempInFahrenheit,
    windSpeedInKph,
  };
  return requiredWeatherData;
}

export { getWeatherData };
