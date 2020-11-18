import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from './services/contact.service';
import { EditContactModalComponent } from './components/edit-contact-modal/edit-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EditContactModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    ContactService
  ],
  exports:[EditContactModalComponent],
  entryComponents: [EditContactModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
