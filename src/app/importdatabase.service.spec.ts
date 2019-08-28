import { TestBed } from '@angular/core/testing';

import { ImportdatabaseService } from './importdatabase.service';

describe('ImportdatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportdatabaseService = TestBed.get(ImportdatabaseService);
    expect(service).toBeTruthy();
  });
});
