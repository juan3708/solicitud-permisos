import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoService } from '../../services/grupo.service';

@Component({
  selector: 'app-grupo-listar',
  templateUrl: './grupo-listar.component.html',
  styleUrls: ['./grupo-listar.component.sass']
})
export class GrupoListarComponent implements OnInit {
  grupos;
  constructor(private grupoService:GrupoService, private router:Router) { }

  ngOnInit() {
    this.grupoService.listar().subscribe((resp:any)=>{
      this.grupos= resp.grupos;
      console.log(this.grupos);
    })
  }
  irACrearGrupo() {
    this.router.navigate(['/grupo']);
  }
}
