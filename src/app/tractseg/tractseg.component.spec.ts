import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractsegComponent } from './tractseg.component';

describe('TractsegComponent', () => {
  let component: TractsegComponent;
  let fixture: ComponentFixture<TractsegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractsegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractsegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
