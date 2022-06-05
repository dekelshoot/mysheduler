import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  display = 1;
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  route(route:string){
    this.router.navigate([route]);
  }


  changeDisplay(direction:string){
    if(direction=="next"){
      this.display=this.display+1
    }else{
      this.display=this.display-1
    }
    if(this.display==4){
      this.display=1
    }
    if(this.display==0){
      this.display=3
    }
  }
  

}
