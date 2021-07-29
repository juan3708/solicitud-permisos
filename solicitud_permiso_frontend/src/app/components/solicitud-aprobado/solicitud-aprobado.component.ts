import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitud-aprobado',
  templateUrl: './solicitud-aprobado.component.html',
  styleUrls: ['./solicitud-aprobado.component.sass']
})
export class SolicitudAprobadoComponent implements OnInit {
  solicitudes;
  constructor(private solicitudesService:SolicitudesService) { }

  ngOnInit() {
    this.listado();
  }

  listado(){
    this.solicitudesService.aprobado().subscribe((resp:any)=>{
      console.log(resp.solicitudes)
      this.solicitudes=resp.solicitudes;
    });
  }

}
