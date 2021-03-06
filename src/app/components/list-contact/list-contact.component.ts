import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
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

  @Input() contactList: Contact[];
  @Input() contactListBehaviorSubject: BehaviorSubject<number>;
  showButton = false;
  message: string;
  constructor(private contactService: ContactService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refresh();
  }

  edit(contact: Contact) {
    const modalConfirmRef = this.modalService.open(EditContactModalComponent,{backdrop:'static', keyboard:false,centered:true });
    modalConfirmRef.componentInstance.contactUpdate = contact;
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
    if(!this.contactList.length) {
      this.showButton = true;
      this.searchResultMessage('Nenhum contato foi criado ainda.');
    }
  }

  search(param: string):void {
    this.refresh();
    if(param) {
      this.contactList = this.contactList.filter( contact => contact.name.includes(param));
      this.showButton = this.contactList && this.contactList.length > 0;
      if(!this.showButton) {
        this.searchResultMessage('Nenhum resultado para essa busca');
      }
    } 
  }

  lastContact(contact: Contact): string {
   
    if (this.contactService.getLastContact(contact)) {
      return '#fff3f2';
    }
  }

  searchResultMessage(message: string) {
    return this.message = message;
  }
}
