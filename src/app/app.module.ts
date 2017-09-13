import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdAutocompleteModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AddressAutoCompleteService} from './address-auto-complete.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule } from '@angular/material';
import { MdFormFieldModule } from '@angular/material';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    MdAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  providers: [AddressAutoCompleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
