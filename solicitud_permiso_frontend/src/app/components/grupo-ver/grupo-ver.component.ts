import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';
import { GrupoService } from '../../services/grupo.service';

@Component({
  selector: 'app-grupo-ver',
  templateUrl: './grupo-ver.component.html',
  styleUrls: ['./grupo-ver.component.sass']
})
export class GrupoVerComponent implements OnInit {
  grupo;
  constructor(private grupoService:GrupoService) { }

  ngOnInit() {

    let trabajador_local = JSON.parse(localStorage.getItem('trabajador'));
    let formData = new FormData();
    formData.append('id_grupo', trabajador_local.grupo_id);
    this.grupoService.buscar(formData).subscribe((resp:any)=>{
      console.log(resp);
      this.grupo=resp.grupo;
    })
  }

}
