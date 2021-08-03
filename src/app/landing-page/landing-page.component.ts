import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit() {
    document.body.classList.add('bg-img');
}

btnClick(){
  this.router.navigate(['/login']);
}
}
