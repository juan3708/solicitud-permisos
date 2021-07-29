import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitud-rechazado',
  templateUrl: './solicitud-rechazado.component.html',
  styleUrls: ['./solicitud-rechazado.component.sass']
})
export class SolicitudRechazadoComponent implements OnInit {
  solicitudes;
  constructor(private solicitudesService:SolicitudesService) { }

  ngOnInit() {
    this.listado();
  }

  listado(){
    this.solicitudesService.rechazado().subscribe((resp:any)=>{
      console.log(resp.solicitudes)
      this.solicitudes=resp.solicitudes;
    });
  }

}
