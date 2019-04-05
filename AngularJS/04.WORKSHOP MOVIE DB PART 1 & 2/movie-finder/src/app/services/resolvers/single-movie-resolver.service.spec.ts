import { TestBed } from '@angular/core/testing';

import { SingleMovieResolverService } from './single-movie-resolver.service';

describe('SingleMovieResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleMovieResolverService = TestBed.get(SingleMovieResolverService);
    expect(service).toBeTruthy();
  });
});
