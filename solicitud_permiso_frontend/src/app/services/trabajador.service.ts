import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  url:string;

  constructor(private http: HttpClient) { 
    this.url = url;
  }

  login(data){
    return this.http.post(url+'trabajador/login',data);
  }
  logout(data){
    return this.http.post(url+'trabajador/logout',data);
  }
  buscar(data){
    return this.http.post(url+'trabajador/buscar',data);
  }
  listar(){
    return this.http.get(url+'trabajador/listar');
  }
  crear(data){
    return this.http.post(url+'trabajador/crear',data);
  }
  asignar(data){
    return this.http.post(url+'trabajador/asignar',data);
  }
}
