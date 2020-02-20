import { Component, OnInit, Input } from "@angular/core";
import { Forecast } from "src/app/Core/Model/Forecast";

@Component({
  selector: "app-forecast-item",
  templateUrl: "./forecast-item.component.html",
  styleUrls: ["./forecast-item.component.scss"]
})
export class ForecastItemComponent implements OnInit {
  @Input() forecast: Forecast;

  constructor() {}

  ngOnInit(): void {}
}
