import { Forecast } from "../Core/Model/Forecast";
import { HumidityDetails } from "../Core/Model/HumidityDetails";

export class SetForecasts {
  static readonly type = "[App] SetForecasts";

  constructor(public forecasts: Forecast[]) {}
}

export class SetHottestDay {
  static readonly type = "[App] SetHottestDay";

  constructor(public hottestDay: Forecast) {}
}

export class SetRainyDays {
  static readonly type = "[App] SetRainyDays";

  constructor(public rainyDays: Forecast[]) {}
}

export class SetHumidityDetails {
  static readonly type = "[App] SetHumidityDetails";

  constructor(public humidityDetails: HumidityDetails) {}
}
