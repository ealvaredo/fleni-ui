import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeviewpatientsComponent } from './freeviewpatients.component';

describe('FreeviewpatientsComponent', () => {
  let component: FreeviewpatientsComponent;
  let fixture: ComponentFixture<FreeviewpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeviewpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeviewpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
