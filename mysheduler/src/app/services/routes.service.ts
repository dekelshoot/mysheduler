import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  baseUrl = 'http://localhost:3000/';
  baseUrlSigup = 'http://localhost:3000/api/signup';
  baseUrlProfil = 'http://localhost:3000/api/sheduler/profil';
  baseUrlProf = 'http://localhost:3000/api/sheduler/prof';
  baseUrlSalle = 'http://localhost:3000/api/sheduler/salle';
  baseUrlFiliere = 'http://localhost:3000/api/sheduler/filiere';
  baseUrlSpecialite = 'http://localhost:3000/api/sheduler/specialite';
  baseUrlNiveau = 'http://localhost:3000/api/sheduler/niveau';
  baseUrlFiliereSpecialite = 'http://localhost:3000/api/sheduler/filiere/specialite';
  baseUrlFiliereNiveauSpecialite = 'http://localhost:3000/api/sheduler/filiere/niveau/specialite';
  baseUrlFiliereNiveau = 'http://localhost:3000/api/sheduler/filiere/niveau';
}
