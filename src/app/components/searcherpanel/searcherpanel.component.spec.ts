import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherpanelComponent } from './searcherpanel.component';

describe('SearcherpanelComponent', () => {
  let component: SearcherpanelComponent;
  let fixture: ComponentFixture<SearcherpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcherpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
