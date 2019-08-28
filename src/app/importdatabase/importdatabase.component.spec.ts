import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportdatabaseComponent } from './importdatabase.component';

describe('ImportdatabaseComponent', () => {
  let component: ImportdatabaseComponent;
  let fixture: ComponentFixture<ImportdatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportdatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
