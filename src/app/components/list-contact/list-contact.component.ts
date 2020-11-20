import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { EditContactModalComponent } from '../edit-contact-modal/edit-contact-modal.component';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  constructor(private contactService: ContactService,private modalService: NgbModal) { }

  contactList: Contact[];
  ngOnInit() {
    this.refresh();
  }

  edit(contact: Contact) {
    const modalConfirmRef = this.modalService.open(EditContactModalComponent,{backdrop:'static', keyboard:false,centered:true });
    modalConfirmRef.componentInstance.contact = contact;
    modalConfirmRef.componentInstance.title="Editar";
    modalConfirmRef.result.then( (result) =>  {
      if(result) {
        this.refresh();
      }
    });
  }

  exclude(contact: Contact): void {
    const modalConfirmRef = this.modalService.open(ConfirmModalComponent,{backdrop:'static', keyboard:false,centered:true });

    modalConfirmRef.result.then( (result) =>  {
      if(result) {
        this.contactService.removeContact(contact);
        this.refresh();
      }
    });
  }

  refresh(): void {
    this.contactList = this.contactService.getContactList();
  }

  search(param: string):void {
    this.refresh();
    if(param){
      this.contactList = this.contactList.filter( contact => contact.name.includes(param));
    }
  }
}
