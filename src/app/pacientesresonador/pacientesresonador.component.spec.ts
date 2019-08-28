import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesresonadorComponent } from './pacientesresonador.component';

describe('PacientesresonadorComponent', () => {
  let component: PacientesresonadorComponent;
  let fixture: ComponentFixture<PacientesresonadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesresonadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesresonadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
