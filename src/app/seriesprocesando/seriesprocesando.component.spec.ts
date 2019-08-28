import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesprocesandoComponent } from './seriesprocesando.component';

describe('SeriesprocesandoComponent', () => {
  let component: SeriesprocesandoComponent;
  let fixture: ComponentFixture<SeriesprocesandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesprocesandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesprocesandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
