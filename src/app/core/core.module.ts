import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ClickOutsideDirective } from './layout/navbar/click-outside.directive';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ClickOutsideDirective],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
