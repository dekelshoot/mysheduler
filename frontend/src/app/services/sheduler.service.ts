import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export class ShedulerService {

  constructor(private daoService: DaoService ) { }

  setCours(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.postCours(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }
  
  deprogram(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.deprogram(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }
  setNewCours(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.postNewCours(data).subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }


  getNomProfesseur(){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getNomProfesseur().subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }
  getCodeCours(){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getCodeCours().subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }

  getPlage(){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getPlage().subscribe(
          (res:any)=>{
            resolve(res)
          }
        )
      }
    )
  }


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

  shedulerNiveau(data:any){
    return new Promise<void>(
      (resolve,reject)=>{
        this.daoService.getShedulerNiveau(data).subscribe(
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
            resolve(res)
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
            resolve(res)
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
