import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'dhaba-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  public cart: any = [];
  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    this.cart = this._sharedService.getCart();
  }

  public removeFromCart(e: any) {}
}
