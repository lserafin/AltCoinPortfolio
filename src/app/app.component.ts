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

  getData(): void {
    console.log("Call API2");
    this.coinService.getData().then(data => this.data = data);
  }

  ngOnInit(): void {
    this.getCoins();
    this.getData();
  }

  onSelect(coin: Coin): void {
    this.selectedCoin = coin;
  }
}
