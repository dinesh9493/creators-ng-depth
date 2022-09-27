import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _cart: any = [];
  private _cartSubject = new Subject();

  constructor() {}

  public getCartSubjectAsObservable() {
    return this._cartSubject.asObservable();
  }

  public triggerCartSubject() {
    this._cartSubject.next(this._cart);
  }

  public getCart() {
    return this._cart;
  }

  public addToCart(e: any) {
    this._cart.push(e);
    this.triggerCartSubject();
  }

  public removeFromCart() {}

  public deleteCart() {}
}
