import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My_Shedule';
  start = false;

  constructor(){}
  ngOnInit(): void {
   setTimeout(()=>{
     this.start = false
   },5000)
}
}
