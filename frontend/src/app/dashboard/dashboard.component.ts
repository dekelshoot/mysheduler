import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShedulerService } from '../services/sheduler.service';
import { AuthService } from '../services/auth.service';
import { ArraysService } from '../services/arrays.service';
import { Sheduler } from 'src/app/models/sheduler.model';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('shedule', {static:false}) el!:ElementRef
  shedulers!:any;
  shedulersAdmin!:any;
  professeur!:any;
  code!:any;
  plage!:any;
  title="";
  faculte!:Array<string>;
  filiere!:string[];
  niveau!:Array<string>;
  jours!:Array<string>;
  sheduler=false
  specialite!:Array<string>;
  plageHoraire!:Array<string>;
  semestre!:Array<string>;
  salle!:Array<string>;
  addForm!: FormGroup;
  addCoursForm!: FormGroup;
  choiceFormEtudient!: FormGroup;
  addFormGraph!: FormGroup;
  mySidenav:any;
  main:any;
  heur="";
  jour="";
  display = "closed";
  displayAdd=1;
  choix = 1 ;
  data!:any;
  data2!:any;
  filNivSpes!:any;
  dataAdmin!:any;
  profil!:any;
  charge=false;modal =true;
  profilForm!: FormGroup;
  messagePassword!:string;
  set:any;
  start=false;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private shedulerService:ShedulerService,
              private authService:AuthService,
              private arraysService:ArraysService) { }

  ngOnInit(): void {
    this.shedulers=new Sheduler().shedulersDefault
    this.shedulersAdmin=new Sheduler().shedulersDefault
    this.filiere = this.arraysService.filiere;
    this.jours = this.arraysService.jour;
    this.jours.unshift("")
    this.niveau = this.arraysService.niveau;
    this.semestre = this.arraysService.semestre;
    this.salle=this.arraysService.salle
    this.plageHoraire = this.arraysService.plageHoraire;
    this.specialite = this.arraysService.specialiteInfo;
    this.mySidenav=document.getElementById("mySidenav");
    this.main=document.getElementById("main");
    this.shedulerService.getNomProfesseur().then(
      (data:any)=>{
        console.log(data)
        this.professeur=data
        this.professeur.unshift({nom_enseignant:''})
      }
    )


    this.shedulerService.getPlage().then(
      (data:any)=>{
        console.log(data)
        this.plage=data
        this.plage.unshift({heure_debut:'',heure_fin:''})
      }
    )


    const data ={
      "email":this.authService.user
    }
    this.chargeData(data)

    this.initForm()
  }

  initForm(){
    this.profilForm = this.formBuilder.group({
      email:['', Validators.required],
      password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      newPassword: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
    this.addForm = this.formBuilder.group({
      code_cours:['', Validators.required],
      professeur:['', Validators.required],
      salle:['', Validators.required],
      plage:['', Validators.required],
      jour:['', Validators.required],
    })
    this.addFormGraph = this.formBuilder.group({
      code_cours:['', Validators.required],
      professeur:['', Validators.required],
      salle:['', Validators.required],
    })
    this.addCoursForm = this.formBuilder.group({
      code_cours:['', Validators.required],
      intitule:['', Validators.required],
      niveau:['', Validators.required],
      semestre:['', Validators.required],
      filiere:['', Validators.required],
      specialite:['', ],
    })
    this.choiceFormEtudient = this.formBuilder.group({
      filiere:['', Validators.required],
      niveau:['', Validators.required],
      specialite:['', ]
    })
  }
  onSubmit(){
    this.start=true;
    // this.displayMessage==false;
    const email = this.profilForm.get('email')?.value;
    const password = this.profilForm.get('password')?.value;
    const newPassword = this.profilForm.get('newPassword')?.value;
    const data = {
      "email":email,
      "password":password,
      "newPassword":newPassword
    }

    this.authService.updatePassword(data).then(
      (data:any)=>{
        this.messagePassword=data.message;
        this.set=data.set;
        this.start=false;
        // this.displayMessage==true;
        this.initForm()
      }
    )

  }
  onSubmitEtudient(){
    this.displayAdd=2
    this.start=true;
    // this.displayMessage==false;
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
    data.specialite=this.arraysService.specialiteToCode(specialite)
    data.groupe=data.niveau+data.specialite
    data.groupeset=this.arraysService.chargeGroupeSet(data.filiere,data.niveau)
    console.log(data)
    this.dataAdmin=data
    this.filNivSpes=data;
    this.shedulerService.shedulerFilierNiveauSpecialite(data).then(
      (data:any)=>{
        console.log(data)
        this.code=data["code"]
        this.code.unshift({code_cours:''})
        this.title=data["title"]
        this.shedulersAdmin=this.arraysService.chargeSheduler(data["data"])
        this.sheduler=true
        this.displayAdd=2
      }
    )
  }else{
    data.groupe=data.niveau+data.filiere
    console.log(data)
    this.dataAdmin=data
    this.filNivSpes=data
    this.shedulerService.shedulerFilierNiveau(data).then(
      (data:any)=>{
        console.log(data)
        this.code=data["code"]
        this.code.unshift({code_cours:''})
        this.title=data["title"]
        this.shedulersAdmin=this.arraysService.chargeSheduler(data["data"])
        this.sheduler=true
        this.displayAdd=2
      }
    )
    this.initForm()
    console.log(data)
  }

  }

  onSubmitAddGraph(){
    // this.start=true;
    // this.displayMessage==false;
    this.start=true
    this.modal=true
    const code_cours = this.addFormGraph.get('code_cours')?.value;
    const salle = this.addFormGraph.get('salle')?.value;
    const professeur = this.addFormGraph.get('professeur')?.value;
    const datas = {
      "code_cours":code_cours,
      "salle":salle,
      "professeur":professeur,
      "heurDebut":this.heur.split("-")[0],
      "heurFin":this.heur.split("-")[1],
      "jour":this.jour
    }
    console.log(datas)
    this.shedulerService.setCours(datas).then(
      (data:any)=>{
        if(data.code==200){
          this.set=true
          this.messagePassword=data.message
        }else{
          this.set=false
          this.messagePassword=data.message
        }
        this.start=false
        this.modal=false
        console.log(data)
        this.rechargeShedulerAdmin(this.dataAdmin);
        this.initForm()
      }
    )

  }
  onSubmitAdd(){
    // this.start=true;
    // this.displayMessage==false;
    this.start=true
    this.modal=true
    const code_cours = this.addForm.get('code_cours')?.value;
    const salle = this.addForm.get('salle')?.value;
    const professeur = this.addForm.get('professeur')?.value;
    const plage = this.addForm.get('plage')?.value;
    const jour = this.addForm.get('jour')?.value;
    const data = {
      "code_cours":code_cours,
      "salle":salle,
      "professeur":professeur,
      "heurDebut":plage.split(" ")[0],
      "heurFin":plage.split(" ")[1],
      "jour":jour
    }

    console.log(data)
    this.shedulerService.setCours(data).then(
      (data:any)=>{
        if(data.code==200){
          this.set=true
          this.messagePassword=data.message
        }else{
          this.set=false
          this.messagePassword=data.message
        }
        this.start=false
        this.modal=false
        console.log(data)
        this.initForm()
      }
    )

  }

  onSubmitAddCours(){
    this.start=true
    this.modal=true
    const code_cours = this.addCoursForm.get('code_cours')?.value;
    const intitule = this.addCoursForm.get('intitule')?.value;
    const niveau = this.addCoursForm.get('niveau')?.value;
    const semestre = this.addCoursForm.get('semestre')?.value;
    const filiere = this.addCoursForm.get('filiere')?.value;
    const specialite = this.addCoursForm.get('specialite')?.value;

    const data = {
      "filiere":this.arraysService.filiereToCode(filiere),
      "niveau":niveau,
      "code_cours":code_cours,
      "intitule":intitule,
      "semestre":semestre,
      "specialite":"none",
      "groupe":"none"
    }
    if(specialite){
      data.specialite=this.arraysService.specialiteToCode(specialite)
      data.groupe=data.niveau+data.specialite
    }else{
      if(data.niveau=="L3" || data.niveau=="M1"){
        data.groupe=this.arraysService.chargeGroupeSet(data.filiere,data.niveau)
      }else{
        data.groupe=data.niveau+data.filiere
      }
    }
    console.log(data)
    this.shedulerService.setNewCours(data).then(
      (data:any)=>{
        if(data.code==200){
          this.set=true
          this.messagePassword=data.message
        }else{
          this.set=false
          this.messagePassword=data.message
        }
        this.start=false
        this.modal=false
        console.log(data)
        this.initForm()
      }
    )

  }
  rechargeShedulerAdmin(data:object){
    if(this.dataAdmin.specialite){
      this.filNivSpes=data;
      this.shedulerService.shedulerFilierNiveauSpecialite(data).then(
        (data:any)=>{
          this.title=data["title"]
          this.shedulersAdmin=this.arraysService.chargeSheduler(data["data"])
        }
      )
    }else{
      this.filNivSpes=data
      this.shedulerService.shedulerFilierNiveau(data).then(
        (data:any)=>{
          this.title=data["title"]
          this.shedulersAdmin=this.arraysService.chargeSheduler(data["data"])
        }
      )
    }
  }
  chargeDate(jour:string,heur:string){
    this.heur=heur;
    this.jour=jour;
    console.log(heur,jour)
  }

  chargeData(data:any){
    this.shedulerService.shedulerProf(data).then(
      (data:any)=>{
        console.log(data)

        this.shedulers=this.arraysService.chargeSheduler(data["data"])
        this.charge=true
      }
    )
    this.shedulerService.Profil(data).then(
      (data:any)=>{
        this.profil=data
        this.title=data.grade+" "+data.prenom+" "+data.nom_enseignant
        console.log(this.profil)
      }
    )

  }

  coteToGrade(code:string){
    const grade = this.arraysService.grade;
    const codeGrade = this.arraysService.codeGrade
    let index = codeGrade.indexOf(code)
    return grade[index]
  }
  route(route:string){
    this.router.navigate([route]);
  }

  openNav() {
    if(this.display=="closed"){
      this.mySidenav.style.width = "250px";
      this.main.style.marginLeft = "250px";
      this.display= "open"
    }else{
      this.closeNav()
    }

  }

  closeNav() {
    this.mySidenav.style.width = "0";
    this.main.style.marginLeft= "50px";
    this.display = "closed"
  }

  choice(id:number){
    this.choix = id
    console.log(id)
  }

  saveSheduler(id:string){
    let pdf = new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("sheduler.pdf")
      }
    })
  }

  back(){
    this.initForm();
    this.displayAdd=1;
  }

  logOut(){
    this.authService.isAuth=false;
    this.authService.user="";
    this.router.navigate(["start"])
  }


}
