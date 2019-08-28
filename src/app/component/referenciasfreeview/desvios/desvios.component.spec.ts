import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesviosComponent } from './desvios.component';

describe('DesviosComponent', () => {
  let component: DesviosComponent;
  let fixture: ComponentFixture<DesviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
