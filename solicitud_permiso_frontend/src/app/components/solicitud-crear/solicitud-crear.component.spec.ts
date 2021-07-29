import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCrearComponent } from './solicitud-crear.component';

describe('SolicitudCrearComponent', () => {
  let component: SolicitudCrearComponent;
  let fixture: ComponentFixture<SolicitudCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
