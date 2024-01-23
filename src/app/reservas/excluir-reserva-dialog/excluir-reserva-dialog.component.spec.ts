import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirReservaDialogComponent } from './excluir-reserva-dialog.component';

describe('ExcluirReservaDialogComponent', () => {
  let component: ExcluirReservaDialogComponent;
  let fixture: ComponentFixture<ExcluirReservaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirReservaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirReservaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
