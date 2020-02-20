import { Forecast } from "./Forecast";

export interface ForecastData {
  forecasts: Forecast[];
  hottestDayIndex: number;
  rainyDaysIndexes: number[];
}
