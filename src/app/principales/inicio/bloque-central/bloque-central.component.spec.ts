import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueCentralComponent } from './bloque-central.component';

describe('BloqueCentralComponent', () => {
  let component: BloqueCentralComponent;
  let fixture: ComponentFixture<BloqueCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueCentralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
