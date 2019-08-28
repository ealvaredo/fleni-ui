import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitivosComponent } from './cognitivos.component';

describe('CognitivosComponent', () => {
  let component: CognitivosComponent;
  let fixture: ComponentFixture<CognitivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
