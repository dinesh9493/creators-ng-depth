import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule],
  providers: [SharedService],
})
export class SharedModule {}
