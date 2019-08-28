import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdatabaseComponent } from './viewdatabase.component';

describe('ViewdatabaseComponent', () => {
  let component: ViewdatabaseComponent;
  let fixture: ComponentFixture<ViewdatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
