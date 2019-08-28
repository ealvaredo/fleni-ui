import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadocomparacionComponent } from './resultadocomparacion.component';

describe('ResultadocomparacionComponent', () => {
  let component: ResultadocomparacionComponent;
  let fixture: ComponentFixture<ResultadocomparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadocomparacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadocomparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
