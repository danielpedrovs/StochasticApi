// src/app/stock-calculator.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-stock-calculator',
    templateUrl: '../index.html',
    styleUrls: ['../stock-calculator.component.css']
  })
  export class StockCalculatorComponent {
    stockHigh: number | undefined;
    stockLow: number | undefined;
    closePrice: number | undefined;
    kStockMessage: string | undefined;
    statementMessage: string | undefined;
  
    calculate() {
      if (this.stockHigh !== undefined && this.stockLow !== undefined && this.closePrice !== undefined) {
        const kStock = 100 * ((this.closePrice - this.stockLow) / (this.stockHigh - this.stockLow));
        this.kStockMessage = `The %k is ${kStock}`;
  
        this.statementMessage =
          kStock < 20
            ? 'That means the stock is oversold and good to buy'
            : kStock > 80
            ? 'That means the stock is overbought and you can consider selling'
            : 'The stock is neither oversold nor overbought.';
      }
    }
  }

