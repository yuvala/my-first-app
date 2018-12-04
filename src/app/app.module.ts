import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServerComponent} from './server/server.component';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { UserNameSectionComponent } from './user-name-section/user-name-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorMessageComponent,
    WarningMessageComponent,
    UserNameSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
