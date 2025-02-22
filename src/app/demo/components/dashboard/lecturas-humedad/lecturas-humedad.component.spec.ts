import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturasHumedadComponent } from './lecturas-humedad.component';

describe('LecturasHumedadComponent', () => {
  let component: LecturasHumedadComponent;
  let fixture: ComponentFixture<LecturasHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturasHumedadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturasHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
