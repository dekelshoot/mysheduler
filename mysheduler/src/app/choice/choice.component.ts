import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArraysService } from '../services/arrays.service';
import { ShedulerService } from '../services/sheduler.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
faculte!:Array<string>;
filiere!:string[];
niveau!:Array<string>;
specialite!:Array<string>;
salle!:Array<string>;
choiceFormEtudient!: FormGroup;
choiceFormSalle!: FormGroup;
choiceFormFiliere!: FormGroup;
choiceFormNiveau!: FormGroup;
choiceFormSpecialite!: FormGroup;
choice=1;
data!:any;
display=1;
sheduler!:string;
  constructor(private router: Router,
              private arraysService: ArraysService,
              private formBuilder: FormBuilder,
              private shedulerService:ShedulerService) { }

  ngOnInit(): void {
    this.faculte = this.arraysService.faculte;
    this.filiere = this.arraysService.filiere;
    this.niveau = this.arraysService.niveau;
    this.specialite = this.arraysService.specialiteInfo;
    this.salle = this.arraysService.salle;
    this.initForm();
  }


//initialid=ser le formulaire
initForm(){
  this.choiceFormEtudient = this.formBuilder.group({

    filiere:['', Validators.required],
    niveau:['', Validators.required],
    specialite:[''],
  })
  this.choiceFormSalle =  this.formBuilder.group({
    salle:['', Validators.required],
  })
  this.choiceFormFiliere =  this.formBuilder.group({
    filiere:['', Validators.required],
  })
  this.choiceFormNiveau =  this.formBuilder.group({
    niveau:['', Validators.required],
  })
  this.choiceFormSpecialite =  this.formBuilder.group({
    specialite:['', Validators.required],
  })
}

//sauvegarder les iformations dans la base donnee
onSubmit(){
  this.display=2
  const filiere = this.choiceFormEtudient.get('filiere')?.value;
  const niveau = this.choiceFormEtudient.get('niveau')?.value;
  const specialite = this.choiceFormEtudient.get('specialite')?.value;
  const data = {
    "filiere":this.filiereToCode(filiere),
    "niveau":niveau,
    "specialite":"none"
  }
  if(specialite){
    data.specialite=specialite
    this.shedulerService.shedulerFilierNiveauSpecialite(data).then(
      (data:any)=>{
        this.data=this.order(data);
      }
    )
  }else{
    this.shedulerService.shedulerFilierNiveau(data).then(
      (data:any)=>{
        this.data=this.order(data);
      }
    )
    console.log(data)
  }


}
onSubmit2(){
  this.display=2
  const salle = this.choiceFormSalle.get('salle')?.value;
  const data = {
    "salle":salle,
  }
 this.shedulerService.shedulerSalle(data).then(
   (data:any)=>{
    this.data=this.order(data);
    this.sheduler="salle"
    this.display=3
   }
 )
}
onSubmit3(){
  this.display=2
  const filiere = this.choiceFormFiliere.get('filiere')?.value;
  const data = {
    "filiere":this.filiereToCode(filiere),
  }
  console.log(data)
  this.shedulerService.shedulerFilier(data).then(
    (data:any)=>{
      this.data=this.order(data);
      for(let dat of this.data){
        dat.code_specialite = this.coteToSpecialite(dat.code_specialite)
      }
      this.sheduler="filiere"
      this.display=3
    }
  )
}
onSubmit4(){
  this.display=2
  const niveau = this.choiceFormNiveau.get('niveau')?.value;
  const data = {
    "niveau":niveau,
  }
//  this.shedulerService.shedulerSalle(data).then(
//    (data:any)=>{
//     this.data=this.order(data);
//     console.log(this.data)
//     this.sheduler="salle"
//     this.display=3
//    }
//  )
}
onSubmit5(){
  this.display=2
  const specialite = this.choiceFormSpecialite.get('specialite')?.value;
  const data = {
    "specialite":this.specialiteToCode(specialite),
  }
 this.shedulerService.shedulerSpecilate(data).then(
   (data:any)=>{
    this.data=this.order(data);
    this.sheduler="specialite"
    this.display=5
   }
 )
}

filiereToCode(filiere:string){
  const filiereList=this.arraysService.filiere;
  const codes = this.arraysService.code
  let index = filiereList.indexOf(filiere)
  return codes[index]
}
coteToSpecialite(code:string){
  const specialite = this.arraysService.specialite;
  const codeSpecialite = this.arraysService.codeSpecial
  let index = codeSpecialite.indexOf(code)
  return specialite[index]
}
specialiteToCode(specialite:string){
  const specialites = this.arraysService.specialite;
  const codeSpecialite = this.arraysService.codeSpecial
  let index = specialites.indexOf(specialite)
  return codeSpecialite[index]
}

changeChoice(id:number){
  this.choice=id;
}

order(datas:any){
  const jours = this.arraysService.jour
  let data=[];
  for(let jour of jours ){
    let datatemp=[];
    for(let dat of datas){
      if( dat.jour==jour){
        datatemp.push(dat)
      }
    }
    datatemp = this.orderByheur(datatemp)
    for(let dat of datatemp){
      data.push(dat)
    }
  }
  return data
}
orderByheur(datas:any){
  const heurs = this.arraysService.heur
  let data=[];
  for(let heur of heurs ){
    for(let dat of datas){
      if( dat.heure_debut==heur){
        data.push(dat)
      }
    }
  }
  console.log(data)
  return data
}
  route(route:string){
    this.router.navigate([route]);
  }


}
