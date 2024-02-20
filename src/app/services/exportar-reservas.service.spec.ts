import { TestBed } from '@angular/core/testing';

import { ExportarReservasService } from './exportar-reservas.service';

describe('ExportarReservasService', () => {
  let service: ExportarReservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportarReservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
