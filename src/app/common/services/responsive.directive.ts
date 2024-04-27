import { Directive, HostBinding, computed, inject } from '@angular/core';
import { Platform } from '../constants';
import { PLATFORM } from '../injection-tokens/platform';
import { ResponsiveService } from './responsive.service';

@Directive()
export abstract class ResponsiveDirective {
  protected readonly responsiveService = inject(ResponsiveService);
  protected readonly responsiveSettings = this.responsiveService.settings;
  protected readonly isMobile = computed(
    () => this.responsiveService.displayType() === 'mobile'
  );
  protected readonly isPWA = inject(PLATFORM) === Platform.PWA;

  @HostBinding('class') get getClass() {
    return this.responsiveService.displayType();
  }
}
