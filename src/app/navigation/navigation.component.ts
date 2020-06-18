import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  WeatherData: any;

  constructor() { }
  ngOnInit() {

    this.WeatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  startDate = new Date(2000, 0, 2);
  getWeatherData() {

    fetch('http://api.openweathermap.org/data/2.5/weather?q=Manali&appid=a08286dbb3748800a333f0e6e1b41f2c')
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })
  }
  setWeatherData(data) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let current_date = new Date();
    this.WeatherData.temp_celsius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
