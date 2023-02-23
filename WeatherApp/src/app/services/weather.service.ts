import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { enviornment } from 'src/enviornments/enviornment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http:HttpClient) {
    
   }
   getWeatherData(cityName:string){
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=442281c10fdbdacfc6b5f432cb127f8e&units=metric')
   }
}
