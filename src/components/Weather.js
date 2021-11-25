import React, { useState, useEffect } from 'react'
import WeatherService from '../services/WeatherService'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Weather = ({ city }) => {
    const [weatherInfo, setWeatherInfo] = useState();

    console.log(city)
    useEffect(() => {
        if (city) {
            WeatherService.getCityWeather(city)
                .then(response => {
                    setWeatherInfo(response)
                })
        }
    }, [city])

    return (
        <div >
            <Card sx={{ minWidth: 250, minHeight: 400 }} elevation={2}>
                {weatherInfo && <CardContent>
                    <Paper elevation={3} sx={{ bgcolor: "gray" }}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Current Weather for:
                        </Typography>
                        <Typography variant="h5" component="div">
                            {weatherInfo.name}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {weatherInfo.sys.country}
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "gray" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Coordinates
                            <br />
                            Lat: {weatherInfo.coord.lat}
                            <br />
                            Lon: {weatherInfo.coord.lon}
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "gray" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Weather:
                            <br />
                            {weatherInfo.weather[0].main}
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "gray" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Temperature <br />
                            Current: {weatherInfo.main.temp} <br />
                            Feels like: {weatherInfo.main.feels_like} <br />
                            Min: {weatherInfo.main.temp_min} <br />
                            Max: {weatherInfo.main.temp_max} <br />
                        </Typography>
                    </Paper>
                    <Paper elevation={3} sx={{ bgcolor: "gray" }}>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Wind <br />
                            Speed: {weatherInfo.wind.speed} <br />
                            Direction: {weatherInfo.wind.deg}
                        </Typography>
                    </Paper>
                    <CardActions>
                        <Button size="small">Learn more about this location</Button>
                    </CardActions>
                </CardContent>}

            </Card>
        </div>
    )

}
export default Weather;