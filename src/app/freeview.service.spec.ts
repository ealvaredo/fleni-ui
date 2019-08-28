import { TestBed } from '@angular/core/testing';

import { FreeviewService } from './freeview.service';

describe('FreeviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeviewService = TestBed.get(FreeviewService);
    expect(service).toBeTruthy();
  });
});
