import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes-ver',
  templateUrl: './solicitudes-ver.component.html',
  styleUrls: ['./solicitudes-ver.component.sass']
})
export class SolicitudesVerComponent implements OnInit {
  solicitudes;
  constructor(private trabajadorService:TrabajadorService,
              private router:Router) { }

  ngOnInit() {
    let trabajador_local = JSON.parse(localStorage.getItem('trabajador'));
    let formData = new FormData();
    formData.append('id_trabajador', trabajador_local.id);
    this.trabajadorService.buscar(formData).subscribe((resp:any)=>{
      console.log(resp.trabajador.solicitud);
      this.solicitudes=resp.trabajador.solicitud;
    })
  }

  irACrear(){
    this.router.navigate(['/solicitud/crear'])
  }

}
