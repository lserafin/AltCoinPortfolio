import { Component } from '@angular/core';

import { Coin } from './coin';
import { CoinService } from './coin.service';
import { RootObject } from "app/jsonModels/cryptonator/rootObject";
import { CoinRows } from "app/jsonModels/cryptonator/coinRows";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoinService]
})
export class AppComponent {
  title = 'List of Coins!';
  coins: Coin[];
  coinRows: CoinRows;
  data: RootObject;
  selectedCoin: Coin;

  constructor(private coinService: CoinService) { }

  getCoins(): void {
    this.coinService.getCoins().then(coins => this.coins = coins);
  }

  getAllCoins(): void {
    this.coinService.getAllCoins().then(coinRows => this.coinRows = coinRows);
  }

  getTicker(base: string,target: string): void {
    this.coinService.getTicker(base,target).then(data => this.data = data);
  }

  ngOnInit(): void {
    this.getCoins();
    this.getAllCoins();
  }

  onSelect(coin: Coin): void {
    this.selectedCoin = coin;
    this.getTicker(this.selectedCoin.symbol,'USD');
  }
}
