import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, Output, inject, output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LuoghiServiceService {

  private http = inject(HttpClient);

  constructor() { }

  getAllLuoghi(){
    return this.http.get("http://localhost:9595/oota-reg/api/luoghi/all");
  }

  addLuoghi(body : any){
   return this.http.post("http://localhost:9595/oota-reg/api/luoghi/add", body);
  }

  deleteLuoghi(id : number){
    return this.http.delete("http://localhost:9595/oota-reg/api/luoghi/delete/"+id)
  }

  updateLuoghi(body : any){
    return this.http.put("http://localhost:9595/oota-reg/api/luoghi/update", body);
  }

}
