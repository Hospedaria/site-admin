import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoReservaComponent } from './edicao-reserva.component';

describe('EdicaoReservaComponent', () => {
  let component: EdicaoReservaComponent;
  let fixture: ComponentFixture<EdicaoReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdicaoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
