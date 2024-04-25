import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiBreakpointService } from '@taiga-ui/core';
import { DisplayType, MAPPER, ResponsiveSettings } from './responsive.settings';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private readonly breakPointService = inject(TuiBreakpointService);

  private _current_display_type: DisplayType = 'desktopLarge';
  private _current_display_settings: ResponsiveSettings =
    MAPPER['desktopLarge'];

  public displayType: WritableSignal<DisplayType> = signal('desktopLarge');

  public get settings() {
    return this._current_display_settings;
  }

  public init() {
    this.breakPointService.pipe(takeUntilDestroyed()).subscribe({
      next: (displayType) => {
        if (displayType) {
          this.displayType.set(displayType);
        }

        switch (displayType) {
          case 'desktopLarge':
            this._current_display_settings = MAPPER['desktopLarge'];
            break;
          case 'desktopSmall':
            this._current_display_settings = MAPPER['desktopSmall'];
            break;
          case 'mobile':
            this._current_display_settings = MAPPER['mobile'];
            break;
          default:
            this._current_display_settings = MAPPER['desktopLarge'];
        }
      },
    });
  }
}
