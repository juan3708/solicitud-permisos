import { TestBed } from '@angular/core/testing';

import { JerarquiaService } from './jerarquia.service';

describe('JerarquiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JerarquiaService = TestBed.get(JerarquiaService);
    expect(service).toBeTruthy();
  });
});
