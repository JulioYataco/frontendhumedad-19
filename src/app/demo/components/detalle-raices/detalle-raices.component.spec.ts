import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRaicesComponent } from './detalle-raices.component';

describe('DetalleRaicesComponent', () => {
  let component: DetalleRaicesComponent;
  let fixture: ComponentFixture<DetalleRaicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRaicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRaicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
