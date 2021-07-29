import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRechazadoComponent } from './solicitud-rechazado.component';

describe('SolicitudRechazadoComponent', () => {
  let component: SolicitudRechazadoComponent;
  let fixture: ComponentFixture<SolicitudRechazadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudRechazadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudRechazadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
