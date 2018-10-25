import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursDetailsComponent } from './hours-details.component';

describe('HoursDetailsComponent', () => {
  let component: HoursDetailsComponent;
  let fixture: ComponentFixture<HoursDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
