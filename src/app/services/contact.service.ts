import { Contact } from "../domain/contact";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactService {
  constructor() {}
  private contactCountBehaviorSubject = new BehaviorSubject<number>(0);
  private lastContact: Contact;

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
    this.lastContact = contact;
    this.clearLastContact();
  }

  updateContact(newContact: Contact, oldContact: Contact):void {
    const contactList = this.getContactList();
    const indice = contactList.findIndex(({name,email,phone}) => name === oldContact.name && email === oldContact.email && phone === oldContact.phone)
    contactList[indice] = newContact;
    sessionStorage.setItem("scheduleList", JSON.stringify(contactList));
    this.lastContact = newContact;
    this.clearLastContact();
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

  getLastContact({name, email, phone,imageColor}): boolean {
    if (this.lastContact) {
      const lastNamePhoneEquals = this.lastContact.name === name && this.lastContact.email === email;
      const lastPhoneImageEquals = this.lastContact.phone === phone && this.lastContact.imageColor === imageColor;
      return lastNamePhoneEquals && lastPhoneImageEquals;
    }
  }

  clearLastContact(){
    setTimeout(() => this.lastContact = new Contact(),10000);
  }
}
