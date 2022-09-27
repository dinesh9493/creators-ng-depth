import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'dhaba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public activeRouterName = '';
  public cartCount: number = 0;

  private _subscriptionList = new Subscription();

  constructor(private _router: Router, private _sharedService: SharedService) {}

  ngOnInit(): void {
    this._subscribeEvents();
  }

  ngOnDestroy(): void {
    this._subscriptionList.unsubscribe();
  }

  private _subscribeEvents() {
    this._subscriptionList.add(
      this._router.events.subscribe((res: any) => {
        if (res instanceof NavigationEnd) {
          this.activeRouterName = res.url;
        }
      })
    );

    this._subscriptionList.add(
      this._sharedService.getCartSubjectAsObservable().subscribe({
        next: (res: any) => {
          this.cartCount = res.length;
        },
        error: (error: any) => {
          console.log(error);
        },
      })
    );

    console.log('Header : Subscribed to Add to cart');
  }

  public navigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
