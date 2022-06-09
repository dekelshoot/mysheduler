import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArraysService } from '../services/arrays.service';
import { ShedulerService } from '../services/sheduler.service';
import { jsPDF } from "jspdf";
import { Subscription } from 'rxjs';
import { Sheduler} from 'src/app/models/sheduler.model';


@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  @ViewChild('shedule', {static:false}) el!:ElementRef
shedulers!:any;
title="";
faculte!:Array<string>;
filiere!:string[];
niveau!:Array<string>;
specialite!:Array<string>;
salle!:Array<string>;
groupe!:object;
choiceFormEtudient!: FormGroup;
choiceFormSalle!: FormGroup;
choiceFormFiliere!: FormGroup;
choiceFormNiveau!: FormGroup;
choiceFormSpecialite!: FormGroup;
choice=1;
data!:any;
display=1;
sheduler=false;
shedulersDefaultSubscription! : Subscription;
  constructor(private router: Router,
              private arraysService: ArraysService,
              private formBuilder: FormBuilder,
              private shedulerService:ShedulerService,
              ) { }

  ngOnInit(): void {
    this.shedulers=new Sheduler().shedulersDefault
    this.faculte = this.arraysService.faculte;
    this.filiere = this.arraysService.filiere;
    this.niveau = this.arraysService.niveau;
    // this.specialite = this.arraysService.specialiteInfo;
    this.groupe = this.arraysService.groupe;
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
    "filiere":this.arraysService.filiereToCode(filiere),
    "niveau":niveau,
    "specialite":"none",
    "groupe":"none",
    "groupeset":"none"
  }
  if(specialite){
    data.specialite=this.arraysService.specialiteToCode(filiere,specialite)
    data.groupe=data.niveau+data.specialite
    data.groupeset=this.arraysService.chargeGroupeSet(data.filiere,data.niveau)
    console.log(data)
    this.shedulerService.shedulerFilierNiveauSpecialite(data).then(
      (data:any)=>{
        console.log(data)
        this.title=data["title"]
        this.shedulers=this.arraysService.chargeSheduler(data["data"])
        this.sheduler=true
        this.display=3
      }
    )
  }else{
    data.groupe=data.niveau+data.filiere
    console.log(data)
    this.shedulerService.shedulerFilierNiveau(data).then(
      (data:any)=>{
        console.log(data)
        this.title=data["title"]
        this.shedulers=this.arraysService.chargeSheduler(data["data"])
        this.sheduler=true
        this.display=3
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
    console.log(data)
    this.title=data["title"]
    this.shedulers=this.arraysService.chargeSheduler(data["data"])
    this.sheduler=true
    this.display=3
   }
 )
}
onSubmit3(){
  this.display=2
  const filiere = this.choiceFormFiliere.get('filiere')?.value;
  const data = {
    "filiere":this.arraysService.filiereToCode(filiere),
  }
  console.log(data)
  this.shedulerService.shedulerFilier(data).then(
    (data:any)=>{
      console.log(data)
      this.title=data["title"]
      this.shedulers=this.arraysService.chargeSheduler(data["data"])
      // for(let dat of this.shedulers){
      //   dat.code_specialite = this.arraysService.coteToSpecialite(dat.code_specialite)
      // }
      this.sheduler=true
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
 this.shedulerService.shedulerNiveau(data).then(
   (data:any)=>{
    console.log(data)
    this.title=data["title"]
    this.shedulers=this.arraysService.chargeSheduler(data["data"])
    this.sheduler=true
    this.display=3
    this.shedulers=this.arraysService.chargeSheduler(data["data"])
   }
 )
}
onSubmit5(){
  this.display=2
  const specialite = this.choiceFormSpecialite.get('specialite')?.value;
  const data = {
    // "specialite":this.arraysService.specialiteToCode(specialite),
  }
 this.shedulerService.shedulerSpecilate(data).then(
   (data:any)=>{
    console.log(data)
    this.title=this.arraysService.coteToSpecialite(data["title"])
    this.shedulers=this.arraysService.chargeSheduler(data["data"])
    this.sheduler=true
    this.display=3
   }
 )
}


changeChoice(id:number){
  this.choice=id;
}

onChangeNiveau(filiere:string,niveau:string){
  if(niveau=="L3"|| niveau=="M1"){
    if(filiere=="Informatique"){
      this.specialite = this.arraysService.specialiteInfo;
    }
    if(filiere=="Mathématique"){
      this.specialite = this.arraysService.specialiteMath;
    }
  }
}



  back(){
    this.display=1;
    this.sheduler=false;
    this.initForm();
  }

  route(route:string){
    this.router.navigate([route]);
  }

  saveSheduler(id:string){
    let pdf = new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("sheduler.pdf")
      }
    })
  }


}
