import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerielistComponent } from './serielist.component';

describe('SerielistComponent', () => {
  let component: SerielistComponent;
  let fixture: ComponentFixture<SerielistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerielistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
