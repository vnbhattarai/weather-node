"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nodeFetch = require("node-fetch");
const argv = require("yargs").argv;
const apiKey = process.env.APIKEY;
const city = argv.c || "Helsinki";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
let getWeather = (url) => __awaiter(this, void 0, void 0, function* () {
    try {
        let response = yield nodeFetch(url);
        const json = yield response.json();
        const message = `It's ${json.main.temp} degree Celsius in ${city}`;
        console.log(message);
    }
    catch (error) {
        console.error(error);
    }
});
getWeather(url);
