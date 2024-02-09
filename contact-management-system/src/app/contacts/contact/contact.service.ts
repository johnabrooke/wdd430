import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from '../contact.model';
import { MOCKCONTACTS } from '../MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelectedEvent = new EventEmitter<Contact>();
  
  contacts: Contact[] = [];
  
  constructor() {
    this.contacts = MOCKCONTACTS;
   }

   getContacts() {
    return this.contacts.slice();
   }

   getContact(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id == id) {
        return contact;
      }
    }
    return null;
   }
}
