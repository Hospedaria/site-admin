import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosReservaAdicionarComponent } from './pagamentos-reserva-adicionar.component';

describe('PagamentosReservaAdicionarComponent', () => {
  let component: PagamentosReservaAdicionarComponent;
  let fixture: ComponentFixture<PagamentosReservaAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosReservaAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentosReservaAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
