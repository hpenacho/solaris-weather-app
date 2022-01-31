<h4 align="center">Solaris Weather Forecast</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#resources-&-libraries-used">Resources & Libraries Used</a> •
  <a href="#how-to-use">How to use</a> •
  <a href="#you-may-also-like">You may also like</a> •
  <a href="#license">License</a>
</p>

____

<p align="center" width="100%">
    <img src="/src/assets/readMeFiles/overview.apng">
</p>

><h3> This project was conceived and developed with the intention of enhancing my portfolio and putting into practice everything I've learned during University of Helsinki's FullStackOpen course. 
  </h3>
  
  <h3 align="center"> You can find the live version  <a href="https://hpenacho.github.io/solaris-weather-app/">here</a>. </h3>

## Key Features

* [x] Fetch the current weather forecast for any location
  - An autocomplete feature tries to guess your search as you type and offers suggestions.
  - Suggestions have a country indicator, to help differentiate locations with equal names, such as Paris from France, or Paris from the US. 
  - This project makes use of the [navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) property whenever the user requests and allows their location to be tracked so they may know the weather in their immediate vicinity.

* [x] Customizable experience
  - The user may choose between two styles of icons, animated and static.
  - The user is able to pick the timeframe of the hourly forecast, between intervals of 1h, 3h and 6h.
  - Celcius and Fahrenheit are toggleable choices when it comes to unit type.
  - Light and dark mode are also customizable and affect the look of the whole application, the initial theme is based on the users system theme.
  - All of the above are saved to the browsers [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and retrieved when available such that future uses of the application remember the users preferences.

* [x] Extensive Forecast Details
  - Both the hourly and daily forecast items can be clicked for further information, a plethora of subitems are displayed, such as temperature data, chance of rain, UV rays, cloud coverage, visibility, humidity, wind direction and speed, etc.
  - The items shown are conditionally rendered based on their relevance, UV rays wont be shown during nightly forecasts on the hourly, rain information will be omitted during clear sky days with zero chance of precipitation, etc.

* [x] Wikipedia and Googlemaps links
  - Links are provided for the location queried by the user.
 
* [x] High responsiveness
  - Special care was taken to ensure a pleasant experience on smaller viewports, with certain components being exclusive to this scenario, such as an extensible drawer list, collapsible settings cogwheel, etc.

## Resources & Libraries used

* This project makes use of the following:

   - Meteorological data is fetched from OpenWeather, specifically I make use of the [One Call API](https://openweathermap.org/api/one-call-api) to gather the bulk of my weather forecast for a particular location.
   - The [Geo Coding API](https://openweathermap.org/api/geocoding-api) is used to derive weatherdata from an aproximation of the user's location whenever geo-location is requested.
   - In terms of external libraries, the foundation of the project was built using Create-React-App, although I plan to transition to Next.js for future projects.
   - MaterialUI 5 for the UI
   - Axios for API requests
   - React-elastic-carousel for the carousel component
   - notistack for stackable and customizable notifications. 

## How To Use

Use npm to install all the dependancies:
```bash
npm install
```

Grab a free API key from [Open Weather](https://openweathermap.org/) and paste it on a .env at the root of your directory, like so:
![screenshot](https://user-images.githubusercontent.com/68301369/151849394-5f512b76-62ba-4083-956c-16d1fcab2263.png)

```bash
npm start
```

## You may also like

- [SimpleCalculator-Java](https://github.com/hpenacho/SimpleCalculator-Java) - A simple calculator built using Java.
- [MusicPlayer-Java](https://github.com/hpenacho/MusicPlayer-Java) - A flexible music player built in Java.

## License

MIT

---

<p align="center" width="100%">
  <a href="https://github.com/hpenacho"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"></a> 
  <a href="https://linkedin.com/in/hugopenacho/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white"></a> 
</p>
