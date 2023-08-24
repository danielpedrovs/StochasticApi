// src/app/stock.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCalculatorComponent } from './StockCalculatorComponent';

@NgModule({
  declarations: [StockCalculatorComponent],
  imports: [CommonModule],
  exports: [StockCalculatorComponent]
})
export class StockModule { }
