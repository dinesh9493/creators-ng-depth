import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-forms';

  private _subscriptionList: any = new Subscription();

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._subscribeToEvetns();
  }

  ngOnDestroy(): void {
    this._subscriptionList.unsubscribe();
  }

  private _subscribeToEvetns() {
    this._subscriptionList.add(
      this._router.events.subscribe({
        next: (routerEvent: any) => {
          console.log(routerEvent);
        },
        error: (routerEvent: any) => {},
      })
    );
  }
}
