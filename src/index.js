import { getWeatherData } from "./weather-data";
import { createHomePage } from "./home";
import "./style.css";
const location = prompt("place:", "supaul");
async function getRequiredWeatherData() {
  const requiredWeatherData = await getWeatherData(location);
  createHomePage(requiredWeatherData);
}
getRequiredWeatherData();
