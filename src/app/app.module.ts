import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from './services/contact.service';
import { EditContactModalComponent } from './components/edit-contact-modal/edit-contact-modal.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NewContactButtonComponent } from './components/new-contact-button/new-contact-button.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from './components/header/header.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    EditContactModalComponent,
    ListContactComponent,
    ConfirmModalComponent,
    NewContactButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [
    ContactService
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
