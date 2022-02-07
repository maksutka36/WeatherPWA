import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<Weather>{
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q',city)
      .set('appId', environment.apiKey);
    
    return this.http.get<Weather>(environment.apiUrl + 'weather', {params: options})
  }

  getUserWeather(lat: number, lon: number): Observable<Weather>{
    const options = new HttpParams()
    .set('units', 'metric')
    .set('lat', lat)
    .set('lon', lon)
    .set('appId', environment.apiKey);
    
    return this.http.get<Weather>(environment.apiUrl + 'weather', {params: options})
  }
}
