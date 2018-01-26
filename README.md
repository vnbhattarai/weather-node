## Node.js weather app

A basic Node.js app written in Typescript.

* Logs out to the console
* Uses ES7 Async/Await with [node-fetch](https://www.npmjs.com/package/node-fetch) for fetching data from openweather API
* Takes arguments in the format of `node index.js -c CUSTOM_CITY_NAME`

## Usage

-> Clone this repo

-> Rename env.sample file to .env and add own openweather API

-> Run `tsc` or `npm run build` to emit out .js file in dist directory

-> Run `node index.js` from dist directory

-> Alternatively, [ts-node](https://github.com/TypeStrong/ts-node) can be used

-> Select different city by: `node index.js -c CUSTOM_CITY_NAME`
