import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPagamentosReservaComponent } from './lista-pagamentos-reserva.component';

describe('ListaPagamentosReservaComponent', () => {
  let component: ListaPagamentosReservaComponent;
  let fixture: ComponentFixture<ListaPagamentosReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPagamentosReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPagamentosReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
