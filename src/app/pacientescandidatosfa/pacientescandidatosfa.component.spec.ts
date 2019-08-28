import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientescandidatosfaComponent } from './pacientescandidatosfa.component';

describe('PacientescandidatosfaComponent', () => {
  let component: PacientescandidatosfaComponent;
  let fixture: ComponentFixture<PacientescandidatosfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientescandidatosfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientescandidatosfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
