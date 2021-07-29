import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url= url;
  }

  crear(data){
    return this.http.post(url+'grupo/crear',data);
  }
  listar(){
    return this.http.get(url+'grupo/listar');
  }
  buscar(data){
    return this.http.post(url+'grupo/buscar',data);
  }
}
