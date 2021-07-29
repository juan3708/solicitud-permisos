import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.sass']
})
export class TrabajadoresComponent implements OnInit {
  trabajadores;

  constructor(private trabajadorService:TrabajadorService
    , private router:Router) { }

  ngOnInit() {
    this.trabajadorService.listar().subscribe((resp:any)=>{
      this.trabajadores= resp.trabajadores;
      console.log(this.trabajadores);
    })
  }
  asignar(id){
    console.log(id);
    this.router.navigate(['/grupo/asignar'],{state: {trabajador_id: id} });
  }

}
