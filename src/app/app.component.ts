import { Component, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditContactModalComponent } from './components/edit-contact-modal/edit-contact-modal.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  constructor(private modalService: NgbModal) {}

  openModal() {
   this.modalService.open(EditContactModalComponent);
  }
}
