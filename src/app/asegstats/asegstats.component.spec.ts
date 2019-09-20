import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsegstatsComponent } from './asegstats.component';

describe('AsegstatsComponent', () => {
  let component: AsegstatsComponent;
  let fixture: ComponentFixture<AsegstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsegstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsegstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
