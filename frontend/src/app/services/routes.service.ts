import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  baseUrl = 'http://localhost:3000/';
  baseUrlSigup = 'http://localhost:3000/api/auth/signup';
  baseUrlProfil = 'http://localhost:3000/api/sheduler/profil';
  baseUrlUpdateProfil = 'http://localhost:3000/api/auth/update';
  baseUrlNewCours = 'http://localhost:3000/api/sheduler/newcours';
  baseUrlSetCours = 'http://localhost:3000/api/sheduler/cours';
  baseUrlProf = 'http://localhost:3000/api/sheduler/prof';
  baseUrlNomProfesseur='http://localhost:3000/api/simple/professeur';
  baseUrlCodeCours='http://localhost:3000/api/simple/codecours';
  baseUrlPlage='http://localhost:3000/api/simple/plage';
  baseUrlSalle = 'http://localhost:3000/api/sheduler/salle';
  baseUrlFiliere = 'http://localhost:3000/api/sheduler/filiere';
  baseUrlSpecialite = 'http://localhost:3000/api/sheduler/specialite';
  baseUrlNiveau = 'http://localhost:3000/api/sheduler/niveau';
  baseUrlFiliereSpecialite = 'http://localhost:3000/api/sheduler/filiere/specialite';
  baseUrlFiliereNiveauSpecialite = 'http://localhost:3000/api/sheduler/filiere/niveau/specialite';
  baseUrlFiliereNiveau = 'http://localhost:3000/api/sheduler/filiere/niveau';
}
