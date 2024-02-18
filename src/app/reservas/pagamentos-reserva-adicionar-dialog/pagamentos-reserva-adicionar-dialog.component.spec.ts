import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosReservaAdicionarDialogComponent } from './pagamentos-reserva-adicionar-dialog.component';

describe('PagamentosReservaAdicionarDialogComponent', () => {
  let component: PagamentosReservaAdicionarDialogComponent;
  let fixture: ComponentFixture<PagamentosReservaAdicionarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosReservaAdicionarDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentosReservaAdicionarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
