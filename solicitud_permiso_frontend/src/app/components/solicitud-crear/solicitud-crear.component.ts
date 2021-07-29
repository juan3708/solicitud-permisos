import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-crear',
  templateUrl: './solicitud-crear.component.html',
  styleUrls: ['./solicitud-crear.component.sass']
})
export class SolicitudCrearComponent implements OnInit {

  constructor(private solicitudesService:SolicitudesService,
              private router:Router) { }

  ngOnInit() {
  }

  crear(dias,motivo, fecha_inicio){
    console.log(dias,motivo,fecha_inicio);
    let trabajador_local = JSON.parse(localStorage.getItem('trabajador'));

    let formData = new FormData();
    formData.append('dias',dias);
    formData.append('motivo',motivo);
    formData.append('fecha_inicio',fecha_inicio);
    formData.append('trabajador_id', trabajador_local.id);

    this.solicitudesService.crear(formData).subscribe((resp:any)=>{
      if(resp.code===200){
        this.router.navigate(['/solicitudes/ver']);
      }
    })
  }

}
