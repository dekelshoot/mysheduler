import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

  constructor() { }
  filiere = ["","Informatique","Biosciences","Chimie","Geosciences","Mathématique","Physique"]
  code = ["","INFO","BIOS","CHIM","GEOS","MAT","PHYS"]
  niveau = ["","L1","L2","L3","M1","M2"]
  specialiteInfo = ["","Data Science","Génie Logiciel","Réseau","Sécurité"]
  faculte = ["","Sciences","Lettres"]
  salle =["","A135","A250","A350","E204","R101","R102","R103","R104","R105","R110","S006","S008"]
  jour = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
  heur= ["07:00:00","10:05:00","13:15:00","16:00:00","16:05:00"]
  codeSpecial = ["DS","GL","R","S"]
  specialite = ["Data Science","Génie Logiciel","Réseau","Sécurité"]
  grade = ["Docteur","Professeur"]
  codeGrade = ["Dr","Pr"]
}
