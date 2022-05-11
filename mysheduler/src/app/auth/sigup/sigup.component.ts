import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss']
})
export class SigupComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  route(route:string){
    this.router.navigate([route]);
  }


}
