import { InfoType } from "../Shared/Enums/InfoType";
import { ForecastDetail } from "../Shared/Enums/ForecastDetail";

export class SetVille {
  static readonly type = "[AppOptions] SetVille";

  constructor(public ville: string) {}
}

export class SetInfoType {
  static readonly type = "[AppOptions] SetInfoType";

  constructor(public infoType: InfoType) {}
}

export class SetForecastDetail {
  static readonly type = "[AppOptions] SetForecastDetail";

  constructor(public forecastDetail: ForecastDetail) {}
}
