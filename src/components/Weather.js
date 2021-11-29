import React, { useState, useEffect } from 'react'
import WeatherService from '../services/WeatherService'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



const Weather = ({ location, unitType, language }) => {
    const [weatherInfo, setWeatherInfo] = useState();

    console.log(location)
    useEffect(() => {
        if (location) {
            WeatherService.getWeather(location, unitType, language)
                .then(response => {
                    setWeatherInfo(response)
                })
        }
    }, [location, unitType, language])

    return (
        <div >
            {weatherInfo && <Card sx={{ minWidth: 250, minHeight: 400 }} elevation={2}>
                <CardContent>
                    <Paper elevation={3} sx={{ bgcolor: "#e8eaf6" }}>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                            Current Weather for:
                        </Typography>
                        <Typography variant="h5" component="div">
                            {weatherInfo.name}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {weatherInfo.sys.country}
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "#e8eaf6" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Coordinates
                            <br />
                            Lat: {weatherInfo.coord.lat}
                            <br />
                            Lon: {weatherInfo.coord.lon}
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "#e8eaf6" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Weather:
                            <br />
                            {weatherInfo.weather[0].main}
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "#e8eaf6" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Temperature <br />
                            Current: {weatherInfo.main.temp} <br />
                            Feels like: {weatherInfo.main.feels_like} <br />
                            Min: {weatherInfo.main.temp_min} <br />
                            Max: {weatherInfo.main.temp_max} <br />
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "#e8eaf6" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Wind <br />
                            Speed: {weatherInfo.wind.speed} <br />
                            Direction: {weatherInfo.wind.deg}
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "#e8eaf6" }}>
                        <CardActions>
                            <Link size="small" href={`http://en.wikipedia.org/wiki/${location}`}> Learn more about {location} </Link>
                        </CardActions>
                    </Paper>
                </CardContent>

            </Card>}
        </div>
    )

}
export default Weather;