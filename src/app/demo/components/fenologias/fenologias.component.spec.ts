import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenologiasComponent } from './fenologias.component';

describe('FenologiasComponent', () => {
  let component: FenologiasComponent;
  let fixture: ComponentFixture<FenologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FenologiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FenologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
