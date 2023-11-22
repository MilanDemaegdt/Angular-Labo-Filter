import { Component } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  title: string;
  people: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.title = 'Customers';
    this.customerService.getCustomers()
        .subscribe((customers: Customer[]) => this.people = customers);

}
}
