import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/domain/person';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.css']
})
export class EditContactModalComponent implements OnInit {

  @Input() evento = 'Criar';
  @Input() set _person(values : Person){
    this.person = values ? values : new Person();
  }

  person: Person;
  constructor(public activeModal: NgbActiveModal, private contactService: ContactService) {
    this.person = new Person();
  }

  ngOnInit() {
  }

  save():void {
    this.contactService.addContact(this.person);
  }

  close():void {
    this.activeModal.dismiss();
  }
}
