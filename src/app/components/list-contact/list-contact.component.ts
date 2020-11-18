import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contactList: Contact[];

  ngOnInit() {
    this.contactList = this.contactService.getContactList();
  }

}
