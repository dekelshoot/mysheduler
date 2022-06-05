import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DaoService } from './dao.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject= new Subject<boolean>();
  userSubject= new Subject<string>();
  isAuth = false;
  user="paulin.yonta@gmail.com";
  constructor(private daoService: DaoService  ) { }

emitAuth(){
  this.authSubject.next(this.isAuth);
}
emitUser(){
  this.userSubject.next(this.user);
}



  signInUser( email: string , password : string){
    return new Promise<void>(
      (resolve , reject) => {
        const data = {
          email: email,
          password: password
        }
        this.daoService.postUser(data).subscribe(
          (res:any) =>{
            if(res.code==2){
              this.isAuth=true;
              this.user=email;
              this.emitAuth()
              this.emitUser()
            }
            resolve(res)
          },
          error =>{
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }


  signOut(){
    this.isAuth=false;
    this.user="";
    this.emitUser()
    this.emitAuth()
  }

  updatePassword(data:any){
    return new Promise<void>(
      (resolve,reject) => {
        this.daoService.UpdateProfil(data).subscribe(
          (res:any)=>{
            this.isAuth=true;
            this.emitAuth()
            this.emitUser()
            resolve(res)
          },
          error =>{
            console.log(error)
            reject(error)
          }

        )
      }
    )
  }
}
