import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoService } from '../../services/grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.sass']
})
export class GrupoComponent implements OnInit {

  constructor(private grupoService:GrupoService, private router:Router) { }

  ngOnInit() {
  }

  crear(nombre){
    console.log(nombre);
    let formData = new FormData();
    formData.append('nombre', nombre);

    this.grupoService.crear(formData).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.code ==200){
        this.router.navigate(['/grupo/listar']);
      }
    })

  }

}
