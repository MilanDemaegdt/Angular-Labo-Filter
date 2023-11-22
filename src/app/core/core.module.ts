import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SorterService } from './sorter.service';
import { CustomerService } from './customer.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [CustomerService, SorterService]
})
export class CoreModule { }
