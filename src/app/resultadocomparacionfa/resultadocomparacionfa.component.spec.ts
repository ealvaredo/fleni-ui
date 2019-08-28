import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadocomparacionfaComponent } from './resultadocomparacionfa.component';

describe('ResultadocomparacionfaComponent', () => {
  let component: ResultadocomparacionfaComponent;
  let fixture: ComponentFixture<ResultadocomparacionfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadocomparacionfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadocomparacionfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
