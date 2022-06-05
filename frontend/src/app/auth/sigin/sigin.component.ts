import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {
  signInForm! : FormGroup;
  errorMessage!: string;
  loading = false;
  start = false;
  success=false;
  error = false;
  modal =true;
  constructor(private router: Router,
              private formBuilder : FormBuilder,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signInForm = this.formBuilder.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(){
    this.start = true;
    this.error=false;
    this.success=false;
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;

        this.authService.signInUser(email, password).then(
          (res:any) => {
            if(res.code==1){
              this.errorMessage = res.err;
              this.start = false;
              this.success= false;
              this.error=true
            }
            if(res.code==2){
              this.error=false;
              this.start = false;
              this.success=true
              this.modal=false;
            }
            if(res.code==3){
              this.errorMessage = res.err;
              this.start = false;
              this.success= false;
              this.error=true
            }

          },
          (error) =>{
            console.log(error)
          }
        );
  }

  route(route:string){
    this.router.navigate([route]);
  }



}
