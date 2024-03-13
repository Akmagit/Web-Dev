import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  constructor(private router: Router) {
  }

  goToHome(){
    this.router.navigate(["home"])
  }

  goToAbout(){
    this.router.navigate(["about"])
  }
}
