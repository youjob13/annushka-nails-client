import { Directive, HostBinding, computed, inject } from '@angular/core';
import { ResponsiveService } from './responsive.service';

@Directive()
export abstract class ResponsiveDirective {
  protected readonly responsiveService = inject(ResponsiveService);
  protected readonly responsiveSettings = this.responsiveService.settings;
  protected readonly isMobile = computed(
    () => this.responsiveService.displayType() === 'mobile'
  );

  @HostBinding('class') get getClass() {
    return this.responsiveService.displayType();
  }
}
