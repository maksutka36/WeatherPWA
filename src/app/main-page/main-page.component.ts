import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from '../weather.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  weather?: Weather
  error = false;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.getGeolocation()
  }

  getGeolocation(){ 
    navigator.geolocation.getCurrentPosition((geoData) => {
      const lat = geoData.coords.latitude
      const lon = geoData.coords.longitude
      this.weatherService.getUserWeather(lat, lon)
        .subscribe( weather => this.weather = weather)
    })
  }

  onSearch(city: string){
    this.weatherService.getWeather(city)
      .subscribe(weather => this.weather = weather)
  }

}
