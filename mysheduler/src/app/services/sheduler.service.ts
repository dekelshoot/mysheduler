import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export class ShedulerService {

  constructor(private daoService: DaoService ) { }

  shedulerFilier(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getShedulerFiliere(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }

  shedulerSpecilate(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getShedulerSpecialite(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }

  shedulerFilierNiveau(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getShedulerFilierNiveau(data).subscribe(
          (res:any)=>{
            console.log(res)
          }
        )
      }
    )
  }

  shedulerFilierNiveauSpecialite(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getShedulerFilierNiveauSpecialite(data).subscribe(
          (res:any)=>{
            console.log(res)
          }
        )
      }
    )
  }

  Profil(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getProfil(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }
  shedulerProf(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getShedulerProf(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }

  shedulerSalle(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getShedulerSalle(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }


}
