import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JerarquiaService {

  url:string;
  constructor(private http:HttpClient) { 
    this.url= url;
  }

  listar(){
    return this.http.get(url+'jerarquia/listar');
  }
}
