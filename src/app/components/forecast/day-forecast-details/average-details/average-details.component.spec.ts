import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageDetailsComponent } from './average-details.component';

describe('AverageDetailsComponent', () => {
  let component: AverageDetailsComponent;
  let fixture: ComponentFixture<AverageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
