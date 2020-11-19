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
      const newContactList = contactList.filter( itemContact => itemContact.name !== contact.name && itemContact.phone !== contact.phone );
      if (newContactList.length) {
        sessionStorage.setItem('scheduleList', JSON.stringify(newContactList));
      } else {
        sessionStorage.removeItem('scheduleList');
      }
  }
}
