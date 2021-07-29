import { Component, OnInit } from '@angular/core';
import { JerarquiaService } from '../../services/jerarquia.service';
import { TrabajadorService } from '../../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajador-crear',
  templateUrl: './trabajador-crear.component.html',
  styleUrls: ['./trabajador-crear.component.sass']
})
export class TrabajadorCrearComponent implements OnInit {
  jerarquias;
  jerarquia_id;

  constructor(private jerarquiaService:JerarquiaService, 
              private trabajadorService:TrabajadorService,
              private router:Router) {
    
   }

  ngOnInit() {
    this.jerarquiaService.listar().subscribe((resp:any)=>{
      this.jerarquias=resp.jerarquias;
    });
  }
  crear(nombre,apellido,dias_restante,email,fecha_nacimiento,
    password,rut,telefono){
      console.log(nombre,fecha_nacimiento,telefono,dias_restante,apellido,email,rut,password)
      let formData = new FormData();
      formData.append('nombre',nombre);
      formData.append('fecha_nacimiento',fecha_nacimiento);
      formData.append('telefono',telefono);
      formData.append('dias_restante',dias_restante);
      formData.append('apellido',apellido);
      formData.append('email',email);
      formData.append('rut',rut);
      formData.append('password',password);
      formData.append('jerarquia_id',this.jerarquia_id);
      this.trabajadorService.crear(formData).subscribe((resp:any)=>{
        if(resp.code===200){
          this.router.navigate(['/trabajadores']);
        }
      })
  }

}
