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

  removeFavorite(person: Contact): void {
    //   const favoriteList = this.getContactList;
    //   const newFavoriteList = favoriteList.filter( movieFavorite => movieFavorite.title !== person.name);
    //   if (favoriteList.length) {
    //     sessionStorage.setItem('scheduleList', JSON.stringify(newFavoriteList));
    //   } else {
    //     sessionStorage.removeItem('scheduleList');
    //   }
  }
}
