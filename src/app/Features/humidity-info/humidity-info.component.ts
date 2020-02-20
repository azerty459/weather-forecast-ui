import { Component, OnInit, Input } from "@angular/core";
import { HumidityDetails } from "src/app/Core/Model/HumidityDetails";

@Component({
  selector: "app-humidity-info",
  templateUrl: "./humidity-info.component.html",
  styleUrls: ["./humidity-info.component.scss"]
})
export class HumidityInfoComponent implements OnInit {
  @Input() humidityDetails: HumidityDetails;

  constructor() {}

  ngOnInit(): void {}
}
