import {Component, Input, OnInit} from '@angular/core';
import {DayForecast} from '../../../model/day-forecast';

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.scss']
})
export class DayForecastComponent implements OnInit {

  @Input() dayForecast: DayForecast;
  @Input() index: number;
  @Input() isSelected;
  dayReplace: string;

  constructor() { }

  ngOnInit() {
    this.setDayReplace();
    console.log(this.dayForecast);
  }

  setDayReplace() {
    switch (this.index) {
      case 0 : {
        this.dayReplace = 'Aujourd\'hui';
        break;
      }
      case 1 : {
        this.dayReplace = 'Demain';
        break;
      }
      default : {
        this.dayReplace = null;
      }
    }
  }

}
