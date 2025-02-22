import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedadCultivosComponent } from './variedad-cultivos.component';

describe('VariedadCultivosComponent', () => {
  let component: VariedadCultivosComponent;
  let fixture: ComponentFixture<VariedadCultivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariedadCultivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariedadCultivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
