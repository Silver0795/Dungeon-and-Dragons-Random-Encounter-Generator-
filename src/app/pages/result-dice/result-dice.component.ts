import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreatureService } from '../../services/creature.service';
import { TerreniService } from '../../services/terreni.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-result-dice',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatIconModule],
  templateUrl: './result-dice.component.html',
  styleUrl: './result-dice.component.scss'
})
export class ResultDiceComponent implements OnInit{


   randomInt = (min : number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

   public risultatoDado=this.randomInt(1,20);

   public data : any = inject(MAT_DIALOG_DATA);
   private serviceCreature : CreatureService = inject(CreatureService);
   private serviceTerreni : TerreniService = inject(TerreniService);

   ngOnInit(): void {

    //Setto i valori di IdLuogo con il luogo scelto dall'utente
    this.IncontroCreatura.idLuogo = this.data
    this.IncontroTerreno.idLuogo = this.data

    //Funzione che gestisce le chiamate
    this.gestioneChiamate(this.risultatoDado,this.data.id);


  }


  private callIncontroCreatura(idLuogo : number){
    this.serviceCreature.getIncontroByLuogo(idLuogo).subscribe({
      next: (resp)=>{
        
        this.responseCreature = resp;

        this.IncontroCreatura= this.responseCreature[Math.floor(Math.random() * this.responseCreature.length)];
       
        console.log(this.IncontroCreatura);
        
      },
      error: (err)=> {
        console.log(err);
        
      }
    })
  }

  private callIncontroTerreno(idLuogo: number){
    this.serviceTerreni.getIncontroByLuogo(idLuogo).subscribe({
      next: (resp)=>{
        
        this.responseTerreni= resp;

        this.IncontroTerreno =this.responseTerreni[Math.floor(Math.random() * this.responseTerreni.length)]
        
        console.log(this.IncontroTerreno);
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

   public IncontroTerreno = {
    id: 0,
    name: "",
    descrizione: "",
    img: "",
    idLuogo : {}
   }

   public IncontroCreatura :any = {
    id: 0,
    name: "",
    descrizione: "",
    img: "",
    idLuogo : {}
   }

   public responseCreature :any = [];

   public responseTerreni: any = [];

   private gestioneChiamate(risultatoDado: number, idLuogo : number){

    if (risultatoDado > 12 && risultatoDado<16) {

      this.callIncontroTerreno(idLuogo)
      
    }else
    if (risultatoDado > 15 && risultatoDado < 19) {
      
      this.callIncontroCreatura(idLuogo)
    }
    else
    if(risultatoDado >= 19){
      this.callIncontroTerreno(idLuogo)
      this.callIncontroCreatura(idLuogo)
    }
   }

}
