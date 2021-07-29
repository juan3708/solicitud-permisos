import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesListarComponent } from './solicitudes-listar.component';

describe('SolicitudesListarComponent', () => {
  let component: SolicitudesListarComponent;
  let fixture: ComponentFixture<SolicitudesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
