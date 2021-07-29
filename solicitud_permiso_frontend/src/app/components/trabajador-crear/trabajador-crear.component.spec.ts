import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorCrearComponent } from './trabajador-crear.component';

describe('TrabajadorCrearComponent', () => {
  let component: TrabajadorCrearComponent;
  let fixture: ComponentFixture<TrabajadorCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajadorCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
