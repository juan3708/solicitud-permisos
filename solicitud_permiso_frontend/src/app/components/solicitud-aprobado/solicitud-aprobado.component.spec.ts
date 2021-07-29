import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAprobadoComponent } from './solicitud-aprobado.component';

describe('SolicitudAprobadoComponent', () => {
  let component: SolicitudAprobadoComponent;
  let fixture: ComponentFixture<SolicitudAprobadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAprobadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAprobadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
