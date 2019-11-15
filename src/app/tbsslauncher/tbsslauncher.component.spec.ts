import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbsslauncherComponent } from './tbsslauncher.component';

describe('TbsslauncherComponent', () => {
  let component: TbsslauncherComponent;
  let fixture: ComponentFixture<TbsslauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbsslauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbsslauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
