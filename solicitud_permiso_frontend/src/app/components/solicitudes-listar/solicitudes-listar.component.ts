import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitudes-listar',
  templateUrl: './solicitudes-listar.component.html',
  styleUrls: ['./solicitudes-listar.component.sass']
})
export class SolicitudesListarComponent implements OnInit {
  solicitudes;
  mensaje;
  estado;
  id_solicitud;
  constructor(private solicitudesService:SolicitudesService) { }

  ngOnInit() {
    this.listado();
  }

  aprobar(id){
    let trabajador_local = JSON.parse(localStorage.getItem('trabajador'));
    let formData = new FormData();
    formData.append('id_trabajador',trabajador_local.id);
    formData.append('id_solicitud',id);
    this.solicitudesService.aprobar(formData).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.code==200){
        this.listado();
        this.mensaje=resp.message;
        this.estado=1;
      }else{
        this.estado=0;
        this.mensaje=resp.message;
      }

    })
  }
  rechazar(){
   
    let trabajador_local = JSON.parse(localStorage.getItem('trabajador'));
    let formData = new FormData();
    formData.append('id_trabajador',trabajador_local.id);
    formData.append('id_solicitud',this.id_solicitud);
    this.solicitudesService.rechazar(formData).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.code==200){
        this.listado();
        this.mensaje=resp.message;
        this.estado=1;
      }else{
        this.estado=0;
        this.mensaje=resp.message;
      }
    })
  }
  listado(){
    this.solicitudesService.listar().subscribe((resp:any)=>{
      console.log(resp.solicitudes)
      this.solicitudes=resp.solicitudes;
    });
  }
  setearId(id){
    this.id_solicitud=id;
  }

}
