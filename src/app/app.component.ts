import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { YahooFinanceService } from './yahoo-finance.service';
import { YourHttpClientService } from './your-http-client.service'; 

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Yahoo Finance Losers</h2>
      <p>Percentage Change: {{ percentageChange }}</p>
    </div>
  `
})
export class AppComponent implements OnInit {
    title:String = 'myApp';
  percentageChange: string = '-';

  constructor(private httpclientService: YourHttpClientService) {}

  ngOnInit() {
    this.httpclientService.getPercentageChange().subscribe(
      data => {
        this.percentageChange = this.extractPercentageChange(data);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private extractPercentageChange(htmlContent: string): string {
    // Extract and process the percentage change from the HTML content
    // You can use regex, DOM manipulation, or a library like DOMParser for this
    // For simplicity, let's assume you've extracted the percentage as a string
    return '-23.14%'; // Replace with the actual extraction logic
  }
}

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule],
    declarations: [AppComponent],
    providers: [YahooFinanceService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('myApp app is running!');
  });
});
