// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StockModule } from './stock.module';

import { AppComponent } from './app.component';
import { YahooFinanceService } from './yahoo-finance.service'; // Update the path as needed

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [YahooFinanceService], // Make sure YahooFinanceService is added here
  bootstrap: [AppComponent]
})
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StockModule],
    bootstrap: [AppComponent]
  })
  export class AppModule { }



