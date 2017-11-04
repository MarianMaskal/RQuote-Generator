import { Injectable } from '@angular/core';

import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Injectable()
export class RandomizeService {
  quotes: Quote[];
  selectedQuote: Quote;

  constructor(private quoteService: QuoteService) { }


  getRandom(arr: Array<any>){
    let index = Math.floor(Math.random()* arr.length);
    return index;
  }

  getQuotes():void{
    this.quoteService.getQuotes().subscribe(quotes => {
      this.quotes = quotes;
      this.randomQuote();
    })
  }

  randomQuote():void{
    let index = this.getRandom(this.quotes);
    this.selectedQuote = this.quotes[index];
  }
  
}
