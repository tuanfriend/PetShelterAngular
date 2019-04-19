import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  addPet(newtask) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaa");
    return this._http.post('/addNew', newtask)
  }

  getPets() {
    return this._http.get('/all');
  }

  deletePet(author_id) {
    return this._http.delete('/pet/'+author_id)
  }

  editPet(pet_id, onepet) {
    return this._http.put('/pet/'+pet_id, onepet)
  }

  getOnePet(author_id){
    return this._http.get('/pet/'+author_id)
  }

  addOneLike(pet_id, onepet) {
    return this._http.put('/petlike/'+pet_id, onepet)
  }
}