import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Customer } from '../shared/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersUrl = 'assets/customers.json';
    ordersUrl = 'assets/orders.json';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.customersUrl)
        .pipe(
          tap (result => { console.log ("opgehaald data :" ,result)}),
         /* catchError(err => {console.log (err)} )*/
        );

    }
}
