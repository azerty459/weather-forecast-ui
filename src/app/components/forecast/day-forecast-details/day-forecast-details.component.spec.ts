import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayForecastDetailsComponent } from './day-forecast-details.component';

describe('DayForecastDetailsComponent', () => {
  let component: DayForecastDetailsComponent;
  let fixture: ComponentFixture<DayForecastDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayForecastDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayForecastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
