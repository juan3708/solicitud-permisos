import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';

@Component({
  selector: 'app-grupo-listar',
  templateUrl: './grupo-listar.component.html',
  styleUrls: ['./grupo-listar.component.sass']
})
export class GrupoListarComponent implements OnInit {
  grupos;
  constructor(private grupoService:GrupoService) { }

  ngOnInit() {
    this.grupoService.listar().subscribe((resp:any)=>{
      this.grupos= resp.grupos;
      console.log(this.grupos);
    })
  }

}
