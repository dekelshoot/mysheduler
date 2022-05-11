import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShedulerService } from '../services/sheduler.service';
import { AuthService } from '../services/auth.service';
import { ArraysService } from '../services/arrays.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mySidenav:any;
  main:any;
  display = "closed";
  choix = 1 ;
  data!:any;
  profil!:any;
  charge=false
  profilForm!: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private shedulerService:ShedulerService,
              private authService:AuthService,
              private arraysService:ArraysService) { }

  ngOnInit(): void {
    this.mySidenav=document.getElementById("mySidenav");
    this.main=document.getElementById("main");
    const data ={
      "email":this.authService.user
    }
    this.chargeData(data)

    this.initForm()
  }

  initForm(){
    this.profilForm = this.formBuilder.group({
      email:['', Validators.required],
      password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }
  onSubmit(){
    const email = this.profilForm.get('email')?.value;
    const password = this.profilForm.get('password')?.value;
    const data = {
      "email":email,
      "password":password,
    }

    console.log(data)

  }

  chargeData(data:any){
    this.shedulerService.shedulerProf(data).then(
      (data:any)=>{
        this.data=data
        this.charge=true
      }
    )
    this.shedulerService.Profil(data).then(
      (data:any)=>{
        this.profil=data
        console.log(this.profil)
      }
    )

  }

  coteToGrade(code:string){
    const grade = this.arraysService.grade;
    const codeGrade = this.arraysService.codeGrade
    let index = codeGrade.indexOf(code)
    return grade[index]
  }
  route(route:string){
    this.router.navigate([route]);
  }

  openNav() {
    if(this.display=="closed"){
      this.mySidenav.style.width = "250px";
      this.main.style.marginLeft = "250px";
      this.display= "open"
    }else{
      this.closeNav()
    }

  }

  closeNav() {
    this.mySidenav.style.width = "0";
    this.main.style.marginLeft= "50px";
    this.display = "closed"
  }

  choice(id:number){
    this.choix = id
  }


}
