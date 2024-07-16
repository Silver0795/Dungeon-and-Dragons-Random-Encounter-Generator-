import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ClipboardModule} from '@angular/cdk/clipboard';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,ClipboardModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  _snackBar : MatSnackBar = inject(MatSnackBar);

  link = window.location.href;


  scrollToTop(){
    window.scrollTo(0,0);
  }

  openSnackBar() {
    this._snackBar.open("Copied to clipboard", "", {duration: 3000})
  }

}
