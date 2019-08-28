import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesestudioComponent } from './pacientesestudio.component';

describe('PacientesestudioComponent', () => {
  let component: PacientesestudioComponent;
  let fixture: ComponentFixture<PacientesestudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesestudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
