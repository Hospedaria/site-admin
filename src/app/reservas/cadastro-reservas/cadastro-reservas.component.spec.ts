import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReservasComponent } from './cadastro-reservas.component';

describe('CadastroReservasComponent', () => {
  let component: CadastroReservasComponent;
  let fixture: ComponentFixture<CadastroReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroReservasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
