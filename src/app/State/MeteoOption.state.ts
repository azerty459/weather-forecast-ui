import { InfoType } from "../Shared/Enums/InfoType";
import { ForecastDetail } from "../Shared/Enums/ForecastDetail";
import { State, Action, StateContext } from "@ngxs/store";
import {
  SetVille,
  SetInfoType,
  SetForecastDetail
} from "../Action/MeteoOption.action";
import { Injectable } from "@angular/core";
import { MeteoService } from "../Core/Service/meteo.service";

export class AppOptions {
  ville: string;
  infoType: InfoType;
  forecastDetail: ForecastDetail;
}

@State<AppOptions>({
  name: "appOptions",
  defaults: {
    ville: null,
    infoType: null,
    forecastDetail: null
  }
})
@Injectable()
export class MeteoOptionState {
  constructor(private meteoService: MeteoService) {}

  @Action(SetVille)
  setVille(
    { getState, patchState }: StateContext<AppOptions>,
    { ville }: SetVille
  ) {
    if (ville === getState().ville) {
      return;
    }
    //On update la ville dans le store
    patchState({ ville });
    //TODO On update les données
    this.updateData(patchState, getState());
  }

  @Action(SetInfoType)
  setInfoType(
    { getState, patchState }: StateContext<AppOptions>,
    { infoType }: SetInfoType
  ) {
    if (infoType === getState().infoType) {
      return;
    }
    //On update la ville dans le store
    patchState({ infoType });
    //TODO On update les données
    this.updateData(patchState, getState());
  }

  @Action(SetForecastDetail)
  setForecastDetail(
    { getState, patchState }: StateContext<AppOptions>,
    { forecastDetail }: SetForecastDetail
  ) {
    if (forecastDetail === getState().forecastDetail) {
      return;
    }
    //On update la ville dans le store
    patchState({ forecastDetail });
    //TODO On update les données
    this.updateData(patchState, getState());
  }

  private updateData(patchState, state: AppOptions) {
    if (state.infoType === InfoType.regular) {
      patchState({ forecasts: null });
      this.meteoService.fetchForecasts(state.ville);
      if (state.forecastDetail === ForecastDetail.heat) {
        patchState({ hottestDay: null });
        this.meteoService.fetchHottestDay(state.ville);
      } else if (state.forecastDetail === ForecastDetail.rain) {
        patchState({ rainyDays: null });
        this.meteoService.fetchRainyDays(state.ville);
      }
    } else if (state.infoType === InfoType.humidity) {
      patchState({ humidityDetails: null });
      this.meteoService.fetchHumidityDetails(state.ville);
    }
  }
}
