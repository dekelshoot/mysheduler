import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth=true;
  isAuthSubscription! : Subscription;
  constructor(private router: Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.isAuth=this.authService.isAuth
    this.isAuthSubscription = this.authService.authSubject.subscribe(
      (isAuth:boolean)=>{
        this.isAuth = isAuth
      }
    )
  }

  signOut(){
    this.authService.signOut()
  }

  route(route:string){
    this.router.navigate([route]);
  }

}
