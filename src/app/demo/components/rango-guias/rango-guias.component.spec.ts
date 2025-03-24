import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoGuiasComponent } from './rango-guias.component';

describe('RangoGuiasComponent', () => {
  let component: RangoGuiasComponent;
  let fixture: ComponentFixture<RangoGuiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangoGuiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangoGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
