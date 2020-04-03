import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractsegseriesComponent } from './tractsegseries.component';

describe('TractsegseriesComponent', () => {
  let component: TractsegseriesComponent;
  let fixture: ComponentFixture<TractsegseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractsegseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractsegseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
