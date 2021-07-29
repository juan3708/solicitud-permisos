import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAsignarComponent } from './grupo-asignar.component';

describe('GrupoAsignarComponent', () => {
  let component: GrupoAsignarComponent;
  let fixture: ComponentFixture<GrupoAsignarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoAsignarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
