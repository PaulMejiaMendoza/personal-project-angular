import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistInfoComponent } from './therapist-info.component';

describe('TherapistInfoComponent', () => {
  let component: TherapistInfoComponent;
  let fixture: ComponentFixture<TherapistInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
