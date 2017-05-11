import { Injectable } from '@angular/core';
import { Coin } from './coin';
import { COINS } from './mock-coins';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RootObject } from "app/rootObject";

@Injectable()
export class CoinService {
  getCoins(): Promise<Coin[]> {
    return Promise.resolve(COINS);
  }

  private heroesUrl = 'https://api.cryptonator.com/api/ticker/btc-usd';  // URL to web api
  constructor(private http: Http) { }
  getData(): Promise<RootObject> {
    console.log('Call API..');
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
