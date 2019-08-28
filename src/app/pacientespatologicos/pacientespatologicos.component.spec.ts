import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientespatologicosComponent } from './pacientespatologicos.component';

describe('PacientespatologicosComponent', () => {
  let component: PacientespatologicosComponent;
  let fixture: ComponentFixture<PacientespatologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientespatologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientespatologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
