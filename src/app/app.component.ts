import { Component } from '@angular/core';

import { Coin } from './coin';
import { CoinService } from './coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoinService]
})
export class AppComponent {
  title = 'List of Coins!';
  coins: Coin[];
  selectedCoin: Coin;

  constructor(private coinService: CoinService) { }

  getCoins(): void {
    this.coinService.getCoins().then(coins => this.coins = coins);
  }

  ngOnInit(): void {
    this.getCoins();
  }

  onSelect(coin: Coin): void {
    this.selectedCoin = coin;
  }
}
