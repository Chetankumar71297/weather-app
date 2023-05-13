import { getWeatherData } from "./weather-data";
const location = prompt("place:", "supaul");
async function getrequiredWeatherData() {
  const requiredWeatherData = await getWeatherData(location);
  console.log(requiredWeatherData);
}
getrequiredWeatherData();
