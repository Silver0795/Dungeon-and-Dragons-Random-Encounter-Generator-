import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {

  constructor() { }

  private http = inject(HttpClient);

  getAllIncontri(){
    return this.http.get("http://localhost:9595/oota-reg/api/incontri-creature/all")
  }

  getIncontroByLuogo(id:any){
    return this.http.get("http://localhost:9595/oota-reg/api/incontri-creature/idLuogo/"+ id)
  }

  addIncontro(body:any){
    return this.http.post("http://localhost:9595/oota-reg/api/incontri-creature/add",body);
  }

}
