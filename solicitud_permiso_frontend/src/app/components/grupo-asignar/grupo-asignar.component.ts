import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoService } from '../../services/grupo.service';
import { TrabajadorService } from '../../services/trabajador.service';

@Component({
  selector: 'app-grupo-asignar',
  templateUrl: './grupo-asignar.component.html',
  styleUrls: ['./grupo-asignar.component.sass']
})
export class GrupoAsignarComponent implements OnInit {
  id_trabajador;
  grupos;
  grupo_id;
  trabajador;
  constructor(private router: Router,
             private grupoService: GrupoService, private trabajadorService:TrabajadorService) {
    this.id_trabajador= this.router.getCurrentNavigation().extras.state.trabajador_id;
    console.log(this.id_trabajador);
   }

  ngOnInit() {
    this.grupoService.listar().subscribe((resp:any)=>{
      this.grupos = resp.grupos;
    })
    let formData = new FormData();
    formData.append('id_trabajador', this.id_trabajador);
    console.log(this.id_trabajador);
    this.trabajadorService.buscar(formData).subscribe((resp:any)=>{
      console.log(resp);
      this.trabajador= resp.trabajador;
    })
  }

  asignar(){
    let formData = new FormData();
    formData.append('id_trabajador', this.id_trabajador);
    formData.append('grupo_id', this.grupo_id);
    this.trabajadorService.asignar(formData).subscribe((resp:any)=>{
      if(resp.code===200){
        this.router.navigate(['/grupo/listar']);
      }
    })


  }

}
