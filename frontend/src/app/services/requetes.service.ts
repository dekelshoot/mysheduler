import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequetesService {

  constructor(private http:HttpClient) { }

  //////////////////////// CRUD/////////////////////////////

  //recuper les informations de la bd
  get(base:any,id:any) {
    return this.http.get(`${base}/${id}`);
  }
  getAll(base:any) {
    return this.http.get(base);
  }

  //inserer les informations dans la bd
  post(base:any,data:any) {
    return this.http.post(base, data);
  }

  //mettre ajour les informations dans la bd
  update(base:any,id:any, data:any) {
    return this.http.put(`${base}/${id}`, data);
  }

  //supprimer les informations dans la bd
  delete(base:any,id:any) {
    return this.http.delete(`${base}/${id}`);
  }
  deleteAll(base:any) {
    return this.http.delete(base);
  }
}
