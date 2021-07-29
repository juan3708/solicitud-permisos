import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  trabajador;
  constructor(private trabajadorService:TrabajadorService, private router:Router) { 

  }

  ngOnInit() {
    let trabajador = JSON.parse(localStorage.getItem('trabajador'));
    this.trabajador =trabajador;
    console.log('hola');
    console.log(this.trabajador);
  }

  logout(){
    let trabajador = JSON.parse(localStorage.getItem('trabajador'));
    let formData = new FormData();
    
   
    formData.append('id', trabajador.id); 
    this.trabajadorService.logout(formData).subscribe((resp:any)=>{
      console.log(resp);
      localStorage.clear();
      this.router.navigate(['/login']);
    })
  }

}
