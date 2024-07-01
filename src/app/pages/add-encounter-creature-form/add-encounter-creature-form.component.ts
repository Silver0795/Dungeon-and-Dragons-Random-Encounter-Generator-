import { Component, OnInit, inject } from '@angular/core';
import { CreatureService } from '../../services/creature.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-add-encounter-creature-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule,MatButton],
  templateUrl: './add-encounter-creature-form.component.html',
  styleUrl: './add-encounter-creature-form.component.scss'
})
export class AddEncounterCreatureFormComponent implements OnInit{

  private service :CreatureService = inject(CreatureService);
  public data : any = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.incontro.idLuogo = this.data
  }

  onSubmit() {
    
    this.service.addIncontro(this.incontro).subscribe({
      next: (resp) =>{
        console.log(resp);
      },
      error: (err)=>{
        console.log(err);
      },
    })
  }

  incontro : any={
    name : "",
    descrizione : "",
    img : "",
    idLuogo: {}
  }



  

}
