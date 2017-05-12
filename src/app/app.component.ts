import { Component } from '@angular/core';

import { Coin } from './coin';
import { CoinService } from './coin.service';
import { RootObject } from "app/rootObject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoinService]
})
export class AppComponent {
  title = 'List of Coins!';
  coins: Coin[];
  data: RootObject;
  selectedCoin: Coin;

  constructor(private coinService: CoinService) { }

  getCoins(): void {
    this.coinService.getCoins().then(coins => this.coins = coins);
  }

  getTicker(base: string,target: string): void {
    this.coinService.getTicker(base,target).then(data => this.data = data);
  }

  ngOnInit(): void {
    this.getCoins();
  }

  onSelect(coin: Coin): void {
    this.selectedCoin = coin;
    this.getTicker(this.selectedCoin.symbol,'USD');
  }
}
