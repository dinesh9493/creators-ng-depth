import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-host',
  templateUrl: './home-host.component.html',
  styleUrls: ['./home-host.component.scss'],
})
export class HomeHostComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  navigate(routerName: string) {
    this._router.navigateByUrl(routerName);
  }
}
