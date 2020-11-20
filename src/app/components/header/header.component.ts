import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';
import { EditContactModalComponent } from '../edit-contact-modal/edit-contact-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() refreshEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();
  searchParam: string;
  get hasContact(): boolean  {
   return this.contactService.getContactCount().value > 0;
  }
  
  constructor(private modalService: NgbModal, private contactService: ContactService) { }

  openModal() {
    const modalRef = this.modalService.open(EditContactModalComponent,{backdrop:'static', keyboard:false });
    modalRef.result.then(() => this.refreshEvent());
  }

  search() {
    this.searchEmitter.emit(this.searchParam);
  }

  refreshEvent(){
    this.refreshEmitter.emit();
  }

}
