import {Component, Input, OnInit} from '@angular/core';
import {CurrentCondition} from '../../../model/current-condition';

@Component({
  selector: 'app-current-condition',
  templateUrl: './current-condition.component.html',
  styleUrls: ['./current-condition.component.scss']
})
export class CurrentConditionComponent implements OnInit {

  @Input() currentCondition: CurrentCondition;
  currentConditionArray: CurrentCondition[];

  constructor() { }

  ngOnInit() {
    this.currentConditionArray = [this.currentCondition];
    console.log(this.currentConditionArray);
  }

}
