import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueDerechaComponent } from './bloque-derecha.component';

describe('BloqueDerechaComponent', () => {
  let component: BloqueDerechaComponent;
  let fixture: ComponentFixture<BloqueDerechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueDerechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
