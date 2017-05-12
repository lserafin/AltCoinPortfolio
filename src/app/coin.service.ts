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

  private tickerUrl = 'https://api.cryptonator.com/api/ticker/';  // URL to web api
  constructor(private http: Http) { }
  getTicker(base: string, target: string): Promise<RootObject> {
    return this.http.get(`${this.tickerUrl}${base.toUpperCase()}-${target.toUpperCase()}`)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
