import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditContactModalComponent } from '../edit-contact-modal/edit-contact-modal.component';

@Component({
  selector: 'app-new-contact-button',
  templateUrl: './new-contact-button.component.html',
  styleUrls: ['./new-contact-button.component.css']
})
export class NewContactButtonComponent{

  @Output() saveContact: EventEmitter<void> = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }

  openModal() {
    const modalRef = this.modalService.open(EditContactModalComponent,{backdrop:'static', keyboard:false,centered:true });
    modalRef.result.then(() => this.saveContact.emit());
  }
}
