/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestriccionsService } from './restriccions.service';

describe('RestriccionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestriccionsService]
    });
  });

  it('should ...', inject([RestriccionsService], (service: RestriccionsService) => {
    expect(service).toBeTruthy();
  }));
});
