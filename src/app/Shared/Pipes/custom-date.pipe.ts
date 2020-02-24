import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "customDate" })
export class CustomDate implements PipeTransform {
  transform(value: string): string {
    let ojduiAsNumber = new Date().getDay();
    let datePrevAsNumber = new Date(value).getDay();
    if (datePrevAsNumber === ojduiAsNumber) {
      return "Aujourd'hui";
    }
    if (datePrevAsNumber === (ojduiAsNumber + 1) % 7) {
      return "Demain";
    }
    return [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    ][datePrevAsNumber];
  }
}
