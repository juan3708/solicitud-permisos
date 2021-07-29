import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  url:string;

  constructor(private http: HttpClient) { 
    this.url = url;
  }

  listar(){
    return this.http.get(url+'solicitud/pendiente');
  }
  aprobado(){
    return this.http.get(url+'solicitud/aprobado');
  }
  rechazado(){
    return this.http.get(url+'solicitud/rechazado');
  }
  crear(data){
    return this.http.post(url+'solicitud/crear',data);
  }
  aprobar(data){
    return this.http.post(url+'solicitud/aprobar',data);
  }
  rechazar(data){
    return this.http.post(url+'solicitud/rechazar',data);
  }

}
