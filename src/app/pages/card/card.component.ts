
import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddEncounterFormComponent } from '../add-encounter-form/add-encounter-form.component';

import { LuoghiServiceService } from '../../services/luoghi-service.service';
import { UpdateLuogoComponent } from '../update-luogo/update-luogo.component';
import { AddEncounterCreatureFormComponent } from '../add-encounter-creature-form/add-encounter-creature-form.component';
import { ResultDiceComponent } from '../result-dice/result-dice.component';

import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent{

  private service : LuoghiServiceService = inject(LuoghiServiceService);
  private dialog : MatDialog = inject(MatDialog);
  
    @Input() luogo: any;

    updateLuogo(luogo : any){
      this.service.updateLuoghi(luogo).subscribe({
        next : (resp) => {
          console.log(resp);
          this.reloadPage();
          
        },
        error : (err) =>{
          console.log("qualcosa non ha funzionato"+ err);
        }
      })
    }

  constructor(){

  }

  openAddEncounter(){
    this.dialog.open(AddEncounterFormComponent,
      {data:  this.luogo
    });
  }

  openUpdateLuogo(){
    this.dialog.open(UpdateLuogoComponent,
      {data:  this.luogo
      });
  }

  OpenAddCreature() {
    this.dialog.open(AddEncounterCreatureFormComponent ,
      {data:  this.luogo
    });
    }


  OpenResultDice() {
    this.dialog.open(ResultDiceComponent ,{
      data: this.luogo
    });
    }

    OpenDeleteDialog(){
      this.dialog.open(DeleteDialogComponent ,
        {data: this.luogo
      });
      }

    reloadPage(){
      window.location.reload();
    }


}
