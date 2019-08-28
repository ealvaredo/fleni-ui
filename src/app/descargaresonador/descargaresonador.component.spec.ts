import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaresonadorComponent } from './descargaresonador.component';

describe('DescargaresonadorComponent', () => {
  let component: DescargaresonadorComponent;
  let fixture: ComponentFixture<DescargaresonadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargaresonadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargaresonadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
