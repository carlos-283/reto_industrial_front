import { TestBed } from '@angular/core/testing';

import { Obrero } from './obrero';

describe('Obrero', () => {
  let service: Obrero;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Obrero);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
