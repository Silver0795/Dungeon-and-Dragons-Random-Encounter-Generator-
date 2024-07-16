import { Component, inject, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { LuoghiServiceService } from '../../services/luoghi-service.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent implements OnInit{


  private service : LuoghiServiceService = inject(LuoghiServiceService);
  private dialog : MatDialog = inject(MatDialog);
  private data = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.luogo= this.data;
  }

  deleteLuogo(id : number) {
    this.service.deleteLuoghi(id).subscribe({
      next : (resp)=>{
        console.log(resp);
        this.reloadPage();
        
      },
      error : (err) => {
        console.log("qualcosa non ha funzionato"+ err); 
      }
    })
  }

  reloadPage(){
    window.location.reload();
  }

  closeDialog(){
    this.dialog.closeAll();
  }


  luogo : any ={
    id: 0,
    nome : "",
    descrizione : ""
  };
}
