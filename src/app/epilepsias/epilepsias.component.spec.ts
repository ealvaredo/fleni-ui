import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilepsiasComponent } from './epilepsias.component';

describe('EpilepsiasComponent', () => {
  let component: EpilepsiasComponent;
  let fixture: ComponentFixture<EpilepsiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpilepsiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpilepsiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
