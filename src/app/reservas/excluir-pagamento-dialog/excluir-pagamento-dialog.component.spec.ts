import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPagamentoDialogComponent } from './excluir-pagamento-dialog.component';

describe('ExcluirPagamentoDialogComponent', () => {
  let component: ExcluirPagamentoDialogComponent;
  let fixture: ComponentFixture<ExcluirPagamentoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirPagamentoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirPagamentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
