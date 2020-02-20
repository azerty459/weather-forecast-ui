import { Forecast } from "./Forecast";

export interface HumidityDetails {
  currentHumidity: number;
  meanHumidityForComingDays: number;
  driestDayPrevision: Forecast;
}
