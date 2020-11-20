import { Contact } from "../domain/contact";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactService {
  constructor() {}
  private contactCountBehaviorSubject = new BehaviorSubject<number>(0);

  setContactCount(contactCount = 0){
    this.contactCountBehaviorSubject.next(contactCount);
  }

  getContactCount() {
    return this.contactCountBehaviorSubject;
  }

  getContactList(): Contact[] {
    const contactList = JSON.parse(sessionStorage.getItem("scheduleList"));
    const count = contactList ? contactList.length : 0;
    this.setContactCount(count);
    return contactList ? contactList : [];
  }

  addContact(contact: Contact): void {
    const contactList = this.getContactList();
    contactList.push(contact);
    sessionStorage.setItem("scheduleList", JSON.stringify(contactList));
  }

  updateContact(newContact: Contact, oldContact: Contact):void {
    const contactList = this.getContactList();
    const indice = contactList.findIndex(({name,email,phone}) => name === oldContact.name && email === oldContact.email && phone === oldContact.phone)
    contactList[indice] = newContact;
    sessionStorage.setItem("scheduleList", JSON.stringify(contactList));
  }

  removeContact(contact: Contact): void {
      const contactList = this.getContactList();
      contactList.splice(contactList.findIndex( ({name,email,phone}) => name === contact.name && email === contact.email && phone === contact.phone), 1);
      if (contactList.length) {
        sessionStorage.setItem('scheduleList', JSON.stringify(contactList));
      } else {
        sessionStorage.removeItem('scheduleList');
      }
  }
}
