import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumoresComponent } from './tumores.component';

describe('TumoresComponent', () => {
  let component: TumoresComponent;
  let fixture: ComponentFixture<TumoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
