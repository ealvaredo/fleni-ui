import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientscandidatesComponent } from './patientscandidates.component';

describe('PatientscandidatesComponent', () => {
  let component: PatientscandidatesComponent;
  let fixture: ComponentFixture<PatientscandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientscandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientscandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
