import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbssseriesComponent } from './tbssseries.component';

describe('TbssseriesComponent', () => {
  let component: TbssseriesComponent;
  let fixture: ComponentFixture<TbssseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbssseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbssseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
