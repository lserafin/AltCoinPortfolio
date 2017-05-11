import { Injectable } from '@angular/core';
import { Coin } from './coin';
import { COINS } from './mock-coins';

@Injectable()
export class CoinService {
  getCoins(): Promise<Coin[]> {
    return Promise.resolve(COINS);
  }
}
