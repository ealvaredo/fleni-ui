import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasfreeviewComponent } from './referenciasfreeview.component';

describe('ReferenciasfreeviewComponent', () => {
  let component: ReferenciasfreeviewComponent;
  let fixture: ComponentFixture<ReferenciasfreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciasfreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciasfreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
