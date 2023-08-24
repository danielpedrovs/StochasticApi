// StockService.js
angular.module('myApp.services', [])
  .service('StockService', function() {
    this.isOverSold = function(stockHigh, stockLow, currentPrice) {
      function isOverSold(stockHigh, stockLow, currentPrice) {
        const kStock = 100 * ((currentPrice - stockLow) / (stockHigh - stockLow));
        const kStockMessage = 'the %k is ' + kStock;
      
        const sttmentK = kStock < 20
          ? "That means the stock is oversold and good to buy"
          : kStock > 80
          ? "That means the stock is overbought and you can consider selling"
          : "The stock is neither oversold nor overbought.";
        
        const statementMessage = sttmentK;
      
        return {
          kStockMessage,
          statementMessage
        };
      }
      
      // Get user input
      const stockHigh = parseFloat(prompt("Enter the highest price:"));
      const stockLow = parseFloat(prompt("Enter the lowest price:"));
      const currentPrice = parseFloat(prompt("Enter the current price:"));
      
      // Call the function with user input
      const result = isOverSold(stockHigh, stockLow, currentPrice);
      console.log(result.kStockMessage);
      console.log(result.statementMessage);
    };
  });
