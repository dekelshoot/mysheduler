import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesService } from './routes.service';
import { RequetesService } from './requetes.service';


@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(private http:HttpClient,
              private route:RoutesService,
              private requete:RequetesService) { }

  postUser(data:any) {
    return this.requete.post(this.route.baseUrlSigup,data)
  }
  getProfil(data:any){
    return this.requete.post(this.route.baseUrlProfil,data)
  }
  getShedulerProf(data:any){
    return this.requete.post(this.route.baseUrlProf,data)
  }
  getShedulerSalle(data:any){
    return this.requete.post(this.route.baseUrlSalle,data)
  }
  getShedulerFiliere(data:any){
    return this.requete.post(this.route.baseUrlFiliere,data)
  }
  getShedulerSpecialite(data:any){
    return this.requete.post(this.route.baseUrlSpecialite,data)
  }
  getShedulerNiveau(data:any){
    return this.requete.post(this.route.baseUrlNiveau,data)
  }
  getShedulerFilierNiveau(data:any){
    return this.requete.post(this.route.baseUrlFiliereNiveau,data)
  }
  getShedulerFilierNiveauSpecialite(data:any){
    return this.requete.post(this.route.baseUrlFiliereNiveauSpecialite,data)
  }

}
