const nodeFetch = require("node-fetch");
const argv = require("yargs").argv;
const apiKey = process.env.APIKEY;
const city = argv.c || "Helsinki";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

let getWeather = async (url: any) => {
  try {
    let response = await nodeFetch(url);
    const json = await response.json();
    const message = `It's ${json.main.temp} degree Celsius in ${city}`;
    console.log(message);
  } catch (error) {
    console.error(error);
  }
};
getWeather(url);
