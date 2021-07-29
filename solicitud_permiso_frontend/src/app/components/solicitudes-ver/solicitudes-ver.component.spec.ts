import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesVerComponent } from './solicitudes-ver.component';

describe('SolicitudesVerComponent', () => {
  let component: SolicitudesVerComponent;
  let fixture: ComponentFixture<SolicitudesVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
