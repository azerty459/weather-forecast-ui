import { State, Action, StateContext, Selector } from "@ngxs/store";
import {
  SetForecasts,
  SetHottestDay,
  SetRainyDays,
  SetHumidityDetails
} from "../Action/MeteoData.action";
import { Forecast } from "../Core/Model/Forecast";
import { HumidityDetails } from "../Core/Model/HumidityDetails";
import { ForecastData } from "../Core/Model/ForecastData";

export class AppData {
  forecasts: Forecast[];
  hottestDay: Forecast;
  rainyDays: Forecast[];
  humidityDetails: HumidityDetails;
}

@State<AppData>({
  name: "appData",
  defaults: {
    forecasts: null,
    hottestDay: null,
    rainyDays: null,
    humidityDetails: null
  }
})
export class MeteoDataState {
  constructor() {}

  @Selector()
  static getForecastData(state: AppData): ForecastData {
    let hottestDayIndex: number = null;
    let rainyDaysIndexes: number[] = null;

    if (state.forecasts != null) {
      if (state.hottestDay != null) {
        hottestDayIndex = state.forecasts.findIndex(
          f => f.date === state.hottestDay.date
        );
      }
      if (state.rainyDays != null) {
        rainyDaysIndexes = [];
        state.forecasts.forEach((f, i) => {
          if (state.rainyDays.some(rdf => rdf.date === f.date)) {
            rainyDaysIndexes.push(i);
          }
        });
      }
    }
    return {
      forecasts: state.forecasts,
      hottestDayIndex,
      rainyDaysIndexes
    };
  }

  @Selector()
  static getHumidityDetails(state: AppData): HumidityDetails {
    return state.humidityDetails;
  }

  @Action(SetForecasts)
  setForecasts(
    { getState, patchState }: StateContext<AppData>,
    { forecasts }: SetForecasts
  ) {
    patchState({ forecasts });
  }

  @Action(SetHottestDay)
  setHottestDay(
    { getState, patchState }: StateContext<AppData>,
    { hottestDay }: SetHottestDay
  ) {
    patchState({ hottestDay });
  }

  @Action(SetRainyDays)
  setRainyDays(
    { getState, patchState }: StateContext<AppData>,
    { rainyDays }: SetRainyDays
  ) {
    patchState({ rainyDays });
  }

  @Action(SetHumidityDetails)
  setHumidityDetails(
    { getState, patchState }: StateContext<AppData>,
    { humidityDetails }: SetHumidityDetails
  ) {
    patchState({ humidityDetails });
  }
}
