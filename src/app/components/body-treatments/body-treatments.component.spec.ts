import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTreatmentsComponent } from './body-treatments.component';

describe('BodyTreatmentsComponent', () => {
  let component: BodyTreatmentsComponent;
  let fixture: ComponentFixture<BodyTreatmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTreatmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
