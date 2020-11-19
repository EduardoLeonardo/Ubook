import { Contact } from "../domain/contact";

export class ContactService {
  constructor() {}

  getContactList(): Contact[] {
    const personList = JSON.parse(sessionStorage.getItem("scheduleList"));
    return personList ? personList : [];
  }

  addContact(person: Contact): void {
    const personList = this.getContactList();
    personList.push(person);
    sessionStorage.setItem("scheduleList", JSON.stringify(personList));
  }

  removeContact(contact: Contact): void {
      const contactList = this.getContactList();
      contactList.splice(contactList.indexOf(contact), 1);
      if (contactList.length) {
        sessionStorage.setItem('scheduleList', JSON.stringify(contactList));
      } else {
        sessionStorage.removeItem('scheduleList');
      }
  }
}
