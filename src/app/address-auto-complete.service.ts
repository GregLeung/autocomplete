import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AddressAutoCompleteService {
    private addressesUrl = '../assets/mock_addresses.json';
    private devUrl = 'http://nbn-dev.tpg.com.au/?r=api/qas&addr=';
    constructor(private http: Http) {}

    getFilteredAddresses(address: String): Observable<any[]>{
        let url = this.devUrl + address;
        return this.http.get(url)
                        .map((res:any) => res.json());
        
    }
}