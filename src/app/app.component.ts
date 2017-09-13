import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MdSlideToggleModule} from '@angular/material';
import { AddressAutoCompleteService } from './address-auto-complete.service';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addressCtrl: FormControl;
  filteredAddresses: any[];

  constructor(private addressAutoCompleteService: AddressAutoCompleteService) {
    this.addressCtrl = new FormControl();  
    this.addressCtrl.valueChanges.subscribe(partialAddress => partialAddress ? this.filterAddresses(partialAddress) : null);
  }

  filterAddresses(addr: string){
    return this.addressAutoCompleteService.getFilteredAddresses(addr).subscribe(res => {
      this.filteredAddresses = res;
    });
  }

}
