import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySteticServicesComponent } from './my-stetic-services.component';

describe('MySteticServicesComponent', () => {
  let component: MySteticServicesComponent;
  let fixture: ComponentFixture<MySteticServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySteticServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySteticServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
