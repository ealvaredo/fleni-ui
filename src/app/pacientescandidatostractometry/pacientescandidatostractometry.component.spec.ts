import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientescandidatostractometryComponent } from './pacientescandidatostractometry.component';

describe('PacientescandidatostractometryComponent', () => {
  let component: PacientescandidatostractometryComponent;
  let fixture: ComponentFixture<PacientescandidatostractometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientescandidatostractometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientescandidatostractometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
