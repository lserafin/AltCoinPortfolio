import { Injectable } from '@angular/core';
import { Coin } from './coin';
import { COINS } from './mock-coins';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RootObject } from "app/jsonModels/cryptonator/rootObject";
import { CoinRows } from "app/jsonModels/cryptonator/coinRows";

@Injectable()
export class CoinService {
  private tickerUrl = 'https://api.cryptonator.com/api/ticker/';  // URL to web api
  private currenciesUrl = 'https://www.cryptonator.com/api/currencies/';
  private cryptoCompareCoinListUrl = 'https://www.cryptocompare.com/api/data/coinlist/';


  constructor(private http: Http) { }

  getCoins(): Promise<Coin[]> {
    return Promise.resolve(COINS);
  }

  getAllCoins(): Promise<CoinRows> {
    return this.http.get(this.currenciesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  
  getTicker(base: string, target: string): Promise<RootObject> {
    return this.http.get(`${this.tickerUrl}${base.toUpperCase()}-${target.toUpperCase()}`)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getCoinsCryptocompare(): Promise<object> {
    return this.http.get(this.cryptoCompareCoinListUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
