import axios from "axios";

const API_KEY = "325dbbd9dc323e2e384f868135a4e530";
const URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  const data = await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
  return data;
};
