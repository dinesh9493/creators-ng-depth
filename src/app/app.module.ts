import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './modules/shared/shared.module';
import { RootComponent } from './components/root/root.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderAndNavModule } from './modules/header-and-nav/header-and-nav.module';

@NgModule({
  declarations: [RootComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HeaderAndNavModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
