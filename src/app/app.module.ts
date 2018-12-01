import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServerComponent} from './server/server.component';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorMessageComponent,
    WarningMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
