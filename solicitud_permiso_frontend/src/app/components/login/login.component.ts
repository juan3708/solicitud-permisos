import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  estado;
  mensaje;
  constructor(private trabajadorService: TrabajadorService, private router:Router) { }

  ngOnInit() {
  }

  login(password,email){

    console.log(password,email);
    let formData = new FormData();
    formData.append('email',email);
    formData.append('password',password);

    this.trabajadorService.login(formData).subscribe((resp:any)=>{
      console.log(resp);
      localStorage.setItem('trabajador', JSON.stringify( resp.trabajador));
      if(resp.code===200){
        this.router.navigate(['/perfil']);
      }else{
        this.estado=1;
        this.mensaje=resp.message;
      }
     
    })
  }

}
