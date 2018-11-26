import { TestBed } from '@angular/core/testing';

import { ListToDisplayService } from './list-to-display.service';

describe('ListToDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListToDisplayService = TestBed.get(ListToDisplayService);
    expect(service).toBeTruthy();
  });
});
