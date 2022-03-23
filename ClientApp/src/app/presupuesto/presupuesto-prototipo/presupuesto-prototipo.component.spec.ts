import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoPrototipoComponent } from './presupuesto-prototipo.component';

describe('PresupuestoPrototipoComponent', () => {
  let component: PresupuestoPrototipoComponent;
  let fixture: ComponentFixture<PresupuestoPrototipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoPrototipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoPrototipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
