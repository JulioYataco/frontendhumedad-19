import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposSuelosComponent } from './tipos-suelos.component';

describe('TiposSuelosComponent', () => {
  let component: TiposSuelosComponent;
  let fixture: ComponentFixture<TiposSuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposSuelosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposSuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
