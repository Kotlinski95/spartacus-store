import { TestBed } from '@angular/core/testing';

import { MySearchBoxService } from './my-search-box.service';

describe('MySearchBoxService', () => {
  let service: MySearchBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySearchBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
