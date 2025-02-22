import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedadRaicesComponent } from './variedad-raices.component';

describe('VariedadRaicesComponent', () => {
  let component: VariedadRaicesComponent;
  let fixture: ComponentFixture<VariedadRaicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariedadRaicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariedadRaicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
