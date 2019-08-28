import { TestBed, inject } from '@angular/core/testing';

import { ResonadorService } from './resonador.service';

describe('ResonadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResonadorService]
    });
  });

  it('should be created', inject([ResonadorService], (service: ResonadorService) => {
    expect(service).toBeTruthy();
  }));
});
