import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  trabajador:any;

  constructor(private trabajadorService: TrabajadorService) {  

  }

  ngOnInit() {
    let trabajador_local = JSON.parse(localStorage.getItem('trabajador'));
    let formData = new FormData();
    formData.append('id_trabajador', trabajador_local.id);
    this.trabajadorService.buscar(formData).subscribe((resp:any)=>{
      this.trabajador = resp.trabajador;

      console.log(this.trabajador);
    })
  }

}
