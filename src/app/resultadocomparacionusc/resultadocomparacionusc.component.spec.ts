import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadocomparacionuscComponent } from './resultadocomparacionusc.component';

describe('ResultadocomparacionuscComponent', () => {
  let component: ResultadocomparacionuscComponent;
  let fixture: ComponentFixture<ResultadocomparacionuscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadocomparacionuscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadocomparacionuscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
