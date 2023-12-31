import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersModule } from './Features/customers/customers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
