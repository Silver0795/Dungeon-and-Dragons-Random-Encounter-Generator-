import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CreateLuoghiComponent } from '../create-luoghi/create-luoghi.component';
import { LuoghiServiceService } from '../../services/luoghi-service.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,MatIconModule,MatButtonModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private dialog : MatDialog){

  }


 private serviceLuoghi : LuoghiServiceService = inject(LuoghiServiceService);

  public cards : any[] = [];





  ngOnInit(): void {

    this.serviceLuoghi.getAllLuoghi().subscribe({
      next : (response : any) =>{

        console.log(response);
        
        this.cards = response;
        
      },
      error : (error) => {
        console.log("Something went wrong..", error);
      }
    })
    
    
  }

  openForm(){

    this.dialog.open(CreateLuoghiComponent)

  }
}
