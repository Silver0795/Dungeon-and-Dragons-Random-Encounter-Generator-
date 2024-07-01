import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TerreniService } from '../../services/terreni.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-encounter-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule,MatButton],
  templateUrl: './add-encounter-form.component.html',
  styleUrl: './add-encounter-form.component.scss'
})
export class AddEncounterFormComponent implements OnInit{

  private service :TerreniService = inject(TerreniService);
  public data : any = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.incontro.idLuogo = this.data
    console.log(this.data);
    
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
