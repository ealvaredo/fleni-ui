import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesprocesadasComponent } from './seriesprocesadas.component';

describe('SeriesprocesadasComponent', () => {
  let component: SeriesprocesadasComponent;
  let fixture: ComponentFixture<SeriesprocesadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesprocesadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesprocesadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
