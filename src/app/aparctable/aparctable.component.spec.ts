import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparctableComponent } from './aparctable.component';

describe('AparctableComponent', () => {
  let component: AparctableComponent;
  let fixture: ComponentFixture<AparctableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparctableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparctableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
