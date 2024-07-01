import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { LuoghiServiceService } from '../../services/luoghi-service.service';


@Component({
  selector: 'app-create-luoghi',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule,MatButton],
  templateUrl: './create-luoghi.component.html',
  styleUrl: './create-luoghi.component.scss'
})
export class CreateLuoghiComponent {

 
  constructor( private service : LuoghiServiceService) {
    
  }

   luogo : any ={
    id : 0,
    name : "",
    descrizione : "",
    img : ""
  }


  onSubmit(){
    
    this.service.addLuoghi(this.luogo).subscribe({
      next : (response : any) =>{
        console.log(response);
        this.reloadPage();
      },
      error : (error) => { 
        console.log("Something went wrong..", error);
        
      }
    })

    
  }

  
  reloadPage(){
    window.location.reload();
  }

}

