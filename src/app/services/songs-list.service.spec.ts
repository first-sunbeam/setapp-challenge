import { TestBed } from '@angular/core/testing';

import { SongsListService } from './songs-list.service';

describe('SongsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongsListService = TestBed.get(SongsListService);
    expect(service).toBeTruthy();
  });
});
