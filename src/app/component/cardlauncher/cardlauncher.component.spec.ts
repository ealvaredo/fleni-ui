import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlauncherComponent } from './cardlauncher.component';

describe('CardlauncherComponent', () => {
  let component: CardlauncherComponent;
  let fixture: ComponentFixture<CardlauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardlauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
