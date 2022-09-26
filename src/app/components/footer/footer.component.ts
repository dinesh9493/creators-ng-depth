import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dhaba-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
