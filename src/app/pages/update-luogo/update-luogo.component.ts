import { Component, Inject, Input, OnInit } from '@angular/core';
import { LuoghiServiceService } from '../../services/luoghi-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-luogo',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule,MatButton],
  templateUrl: './update-luogo.component.html',
  styleUrl: './update-luogo.component.scss'
})
export class UpdateLuogoComponent implements OnInit{
 
  constructor( private service : LuoghiServiceService ,@Inject(MAT_DIALOG_DATA) public luogo :any) {
  }

  luogoItem:any = {
    id: 0,
    name : "",
    descrizione: "",
    img: ""

  }

  ngOnInit(): void {
    this.luogoItem = this.luogo;
  }

  onSubmit(){
    this.service.updateLuoghi(this.luogo).subscribe({
      next: (resp)=>{
        console.log(resp);
        this.reloadPage();
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

  reloadPage(){
    window.location.reload();
  }

}
