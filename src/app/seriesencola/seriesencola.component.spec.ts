import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesencolaComponent } from './seriesencola.component';

describe('SeriesencolaComponent', () => {
  let component: SeriesencolaComponent;
  let fixture: ComponentFixture<SeriesencolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesencolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesencolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
