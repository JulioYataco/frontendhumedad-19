import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SublotesComponent } from './sublotes.component';

describe('SublotesComponent', () => {
  let component: SublotesComponent;
  let fixture: ComponentFixture<SublotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SublotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SublotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
