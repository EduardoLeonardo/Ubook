import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.css']
})
export class EditContactModalComponent implements OnInit {

  @Input() evento = 'Criar';
  @Input() set _contact(values : Contact){
    this.contact = values ? values : new Contact();
  }

  contact: Contact;
  constructor(public activeModal: NgbActiveModal, private contactService: ContactService) {
    this.contact = new Contact();
  }

  ngOnInit() {
  }

  save():void {
    this.contactService.addContact(this.contact);
  }

  close():void {
    this.activeModal.dismiss();
  }
}
