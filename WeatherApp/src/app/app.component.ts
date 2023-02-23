import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  temp:number=0;
  myweather:any
  min_temp:number=0;
  max_temp:number=0;
  humidity:number=0;
  wind:number=0;
  cityName:string='Kerala'
  displayCity:string='Hello'
  onsubmit(){
    this.weatherservice.getWeatherData(this.cityName).subscribe({
      next:(res)=>{
        console.log(res)
        this.myweather=res
      this.temp=this.myweather.main.temp
      this.humidity=this.myweather.main.humidity
      this.max_temp=this.myweather.main.temp_max
      this.min_temp=this.myweather.main.temp_min
      this.wind=this.myweather.wind.speed
      this.displayCity=this.cityName
      }
    })
    this.cityName=''
  }


  constructor(private weatherservice:WeatherService ){

  }
  ngOnInit() {
    this.weatherservice.getWeatherData(this.cityName).subscribe({
    next:(res)=>{
      this.myweather=res
    this.temp=this.myweather.main.temp
    this.humidity=this.myweather.main.humidity
    this.max_temp=this.myweather.main.temp_max
    this.min_temp=this.myweather.main.temp_min
    this.wind=this.myweather.wind.speed
    this.displayCity=this.cityName
    }    
    })
  }
}
