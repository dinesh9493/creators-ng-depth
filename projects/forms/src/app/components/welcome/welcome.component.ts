import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public navigate(routerName: string) {
    this._router.navigateByUrl(routerName);
  }
}
