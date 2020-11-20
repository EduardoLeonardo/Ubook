import { Component, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.css']
})
export class EditContactModalComponent {

  @Input() title = 'Criar';
  @Input() set contactUpdate({name, email, phone, imageColor}: Contact){
    this.newContact.name = name;
    this.newContact.email = email;
    this.newContact.phone = phone;
    this.newContact.imageColor = imageColor;
    this.oldContact = {name, email, phone, imageColor};
  }

  newContact = new Contact();
  private color=['#fa8d68', '#90d26c', '#68a0fa', '#fab668', '#fab668', '#fa68b5', '#5fe2c4', '#f55a5a'];
  private oldContact: Contact;

  constructor(public editContactModal: NgbActiveModal, private contactService: ContactService) {
    this.newContact = new Contact();
  }


  save(): void {
    if(this.saveIsValid()) {
      if (this.oldContact) {
        this.contactService.updateContact(this.newContact,this.oldContact);
      } else {
        this.newContact.imageColor = this.getColor();
        this.contactService.addContact(this.newContact);
      }
      this.editContactModal.close(this.newContact);
    }
  }

  saveIsValid(): boolean {
    const {name, email, phone} = this.newContact;
    return  name !== ''  || email !=='' || phone !== '';
  }

  getColor(): string{
    return this.color[Math.floor(Math.random() * this.color.length - 1)];
  }
}
