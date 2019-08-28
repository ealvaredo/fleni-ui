import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargandopacienteComponent } from './descargandopaciente.component';

describe('DescargandopacienteComponent', () => {
  let component: DescargandopacienteComponent;
  let fixture: ComponentFixture<DescargandopacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargandopacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargandopacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
