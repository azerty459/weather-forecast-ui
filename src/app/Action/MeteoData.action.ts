import { Forecast } from "../Core/Model/Forecast";
import { HumidityDetails } from "../Core/Model/HumidityDetails";

export class SetForecasts {
  static readonly type = "[AppData] SetForecasts";

  constructor(public forecasts: Forecast[]) {}
}

export class SetHottestDay {
  static readonly type = "[AppData] SetHottestDay";

  constructor(public hottestDay: Forecast) {}
}

export class SetRainyDays {
  static readonly type = "[AppData] SetRainyDays";

  constructor(public rainyDays: Forecast[]) {}
}

export class SetHumidityDetails {
  static readonly type = "[AppData] SetHumidityDetails";

  constructor(public humidityDetails: HumidityDetails) {}
}
