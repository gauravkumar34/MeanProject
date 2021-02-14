import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }
  //getAllContacts
  getContacts() {
    return this.http.get('api/contacts');
  }
  //add contacts
  addContact(item:any) {
    return this.http.post('api/contact',item);
  }
  //delete contact
  deleteContact(id:any){
    return this.http.delete('api/contact/'+id);
  }
  
}
