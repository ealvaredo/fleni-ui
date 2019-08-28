import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientescandidatosComponent } from './pacientescandidatos.component';

describe('PacientescandidatosComponent', () => {
  let component: PacientescandidatosComponent;
  let fixture: ComponentFixture<PacientescandidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientescandidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientescandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
