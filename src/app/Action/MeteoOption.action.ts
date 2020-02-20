import { InfoType } from "../Shared/Enums/InfoType";
import { ForecastDetail } from "../Shared/Enums/ForecastDetail";

export class SetVille {
  static readonly type = "[App] SetVille";

  constructor(public ville: string) {}
}

export class SetInfoType {
  static readonly type = "[App] SetInfoType";

  constructor(public infoType: InfoType) {}
}

export class SetForecastDetail {
  static readonly type = "[App] SetForecastDetail";

  constructor(public forecastDetail: ForecastDetail) {}
}
