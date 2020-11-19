import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.css']
})
export class EditContactModalComponent {

  @Output() saveContact: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Input() title = 'Criar';
  @Input() contact = new Contact();
  color =['#fa8d68', '#90d26c', '#68a0fa', '#fab668', '#fab668', '#fa68b5', '#5fe2c4', '#f55a5a'];
  constructor(public editContactModal: NgbActiveModal, private contactService: ContactService) {
  }

  save(): void {
    this.contact.imageColor = this.getColor();
    this.contactService.addContact(this.contact);
    this.editContactModal.close();
  }

  saveIsValid(): boolean {
    const {name, email, phone} = this.contact;
    return  name !== ''  || email !=='' || phone !== '';
  }

  getColor(): string{
    return this.color[Math.floor(Math.random() * this.color.length - 1)];
  }
}
