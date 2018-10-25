import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';
import {map} from 'rxjs/operators';
import {ForecastService} from '../../services/forecast/forecast.service';
import {Forecast} from '../../model/forecast';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  /**
   * default city
   */
  city = 'Lille';
  forecast: Forecast;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openSettings() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '250px',
      data: {city: this.city}
    });

    dialogRef.afterClosed().subscribe(
      result => {
      this.city = result;
    });
  }


}
