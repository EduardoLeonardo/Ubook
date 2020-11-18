import { Person } from "../domain/person";

export class ContactService {
  constructor() {}

  getContactList(): Person[] {
    const personList = JSON.parse(sessionStorage.getItem("scheduleList"));
    return personList ? personList : [];
  }

  addContact(person: Person): void {
    const personList = this.getContactList();
    personList.push(person);
    sessionStorage.setItem("scheduleList", JSON.stringify(personList));
  }

  removeFavorite(person: Person): void {
    //   const favoriteList = this.getContactList;
    //   const newFavoriteList = favoriteList.filter( movieFavorite => movieFavorite.title !== person.name);
    //   if (favoriteList.length) {
    //     sessionStorage.setItem('scheduleList', JSON.stringify(newFavoriteList));
    //   } else {
    //     sessionStorage.removeItem('scheduleList');
    //   }
  }
}
