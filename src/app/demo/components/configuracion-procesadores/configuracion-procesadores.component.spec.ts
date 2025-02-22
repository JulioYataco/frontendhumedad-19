import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionProcesadoresComponent } from './configuracion-procesadores.component';

describe('ConfiguracionProcesadoresComponent', () => {
  let component: ConfiguracionProcesadoresComponent;
  let fixture: ComponentFixture<ConfiguracionProcesadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionProcesadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionProcesadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
