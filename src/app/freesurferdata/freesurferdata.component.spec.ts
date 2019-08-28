import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreesurferdataComponent } from './freesurferdata.component';

describe('FreesurferdataComponent', () => {
  let component: FreesurferdataComponent;
  let fixture: ComponentFixture<FreesurferdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreesurferdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreesurferdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
