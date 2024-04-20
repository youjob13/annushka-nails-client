import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [HeaderComponent, AboutComponent],
  exports: [HeaderComponent, AboutComponent],
})
export class AppearanceModule {}
