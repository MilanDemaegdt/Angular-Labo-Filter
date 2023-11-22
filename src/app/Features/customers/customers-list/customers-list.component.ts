import { Component, Input } from '@angular/core';
import { SorterService } from 'src/app/core/sorter.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {
  filteredCustomers: Customer[];
  customersOrderTotal: number;
  currencyCode: string;




private _customers: Customer[] = [];
@Input() get customers(): Customer[] {
    return this._customers;
}
set customers(value: Customer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
      ;
    }
}
constructor(private sorterService: SorterService) { }

ngOnInit(): void {
  this.filteredCustomers = [];
  this.customersOrderTotal = 0;
  this.currencyCode = 'EUR';
}

calculateOrders() {
  this.customersOrderTotal = 0;
  this.filteredCustomers.forEach((cust: Customer) => {
      this.customersOrderTotal += cust.orderTotal;
  });
}

filtering(data: string) {
  if (data) {
      this.filteredCustomers = this._customers.filter((cust: Customer) => {
          return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                 cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                 cust.orderTotal.toString().indexOf(data) > -1;
      });
  } else {
      this.filteredCustomers = this._customers;
  }
  this.calculateOrders();
}
sort(prop: string) {
  this.sorterService.sort(this.filteredCustomers, prop);
}
}

