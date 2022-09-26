import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dhaba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public activeRouterName = "";

  private _subscriptionList = new Subscription();

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._subscribeEvents();
  }

  ngOnDestroy(): void {
    this._subscriptionList.unsubscribe();
  }

  private _subscribeEvents() {
    this._subscriptionList.add(
      this._router.events.subscribe(
        (res: any) => {
          if(res instanceof NavigationEnd) {
            this.activeRouterName = res.url;
          }
        }
      )
    )
  }

  public navigate(url: string) {
    this._router.navigateByUrl(url);
  }

}
