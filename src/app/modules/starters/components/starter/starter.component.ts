import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'dhaba-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class StarterComponent implements OnInit {
  public starterList: any = [
    { starterName: 'Kebab', price: 100 },
    { starterName: 'Gobi Manchurian', price: 60 },
    { starterName: 'Pepper Mushroom Dry', price: 80 },
  ];

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {}

  public addToCart(e: any) {
    this._sharedService.addToCart(e);
  }
}
