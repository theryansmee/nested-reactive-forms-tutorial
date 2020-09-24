import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContactFormModule } from './user-contact-form/user-contact-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserContactFormModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
