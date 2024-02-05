import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosReservaComponent } from './pagamentos-reserva.component';

describe('PagamentosReservaComponent', () => {
  let component: PagamentosReservaComponent;
  let fixture: ComponentFixture<PagamentosReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentosReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
