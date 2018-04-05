import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Bitcoinmarket } from '../models/bitcoin-market.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bitcoinMarketCap: Bitcoinmarket = new Bitcoinmarket();
  constructor(public cryptoService: CryptoService) {
  this.getBitcoinStats();
  }
  public getBitcoinStats(): void {
    this.cryptoService.getBitcoinmarketCap().subscribe((data: any) => {
      this.bitcoinMarketCap = new Bitcoinmarket(data);
      console.log(this.bitcoinMarketCap);
      
    })
  };
}
