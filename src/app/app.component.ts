import { Component, Injectable, OnInit,Input } from '@angular/core';
import { RandomizeService } from './randomize.service';
import { QuoteService } from './quote.service';

import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.css'],
  providers: [RandomizeService,QuoteService],
})
export class AppComponent implements OnInit {


  constructor(public random: RandomizeService){}

  ngOnInit():void{
    this.random.getQuotes();

    
  }

  getNew():void{
    this.random.randomQuote();
  }
  
  tweet(qText: HTMLHeadingElement, qAuthor: HTMLElement):void{
    window.open("https://twitter.com/intent/tweet?text=" + qText.textContent + "  ― " + qAuthor.textContent);
  }
 
  
    
  




  /*getNew(){
    this.quoteT = this.getText(this.loadedQuote.quoteText);
  }

  getText(q: string){
    var obj = JSON.parse(q);
    var i = Math.floor((Math.random() * obj.quotes.length)+1);
    return obj.quotes[i-1].quote;

  }
*/

  
}
