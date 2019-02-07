import { TestBed, async, inject } from '@angular/core/testing';

import { ClientAdminGuard } from './client-admin.guard';

describe('ClientAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientAdminGuard]
    });
  });

  it('should ...', inject([ClientAdminGuard], (guard: ClientAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
