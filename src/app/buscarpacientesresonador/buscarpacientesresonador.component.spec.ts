import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpacientesresonadorComponent } from './buscarpacientesresonador.component';

describe('BuscarpacientesresonadorComponent', () => {
  let component: BuscarpacientesresonadorComponent;
  let fixture: ComponentFixture<BuscarpacientesresonadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarpacientesresonadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpacientesresonadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
