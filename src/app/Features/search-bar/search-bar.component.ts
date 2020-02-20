import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { SetVille, SetInfoType } from "src/app/Action/MeteoOption.action";
import { InfoType } from "src/app/Shared/Enums/InfoType";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  ville: string;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  setVille() {
    console.log(this.ville);
    this.store.dispatch(new SetVille(this.ville));
  }

  goToMeteo() {
    this.store.dispatch(new SetInfoType(InfoType.regular));
  }

  goToHumidity() {
    this.store.dispatch(new SetInfoType(InfoType.humidity));
  }
}
