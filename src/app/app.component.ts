import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditContactModalComponent } from './components/edit-contact-modal/edit-contact-modal.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild('listContact') listContact: ListContactComponent; 

  searchParam: string;
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(EditContactModalComponent,{backdrop:'static', keyboard:false });
    modalRef.result.then(() => this.listContact.refresh());
  }

  search() {
    this.listContact.search(this.searchParam);
  }
}
