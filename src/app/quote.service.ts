import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Quote } from './quote';


@Injectable()
export class QuoteService {

  private quotesUrl = '../assets/quotes.json';

  constructor(private http: Http) { }


  
  getQuotes(): Observable<Quote[]>{
    return this.http.get(this.quotesUrl)
          .map((res) => this.extractData(res)).catch((err)=>this.handleError(err));
  }



  private extractData(res: Response){
    if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.quotes || {};         

  }

 private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

  
}
