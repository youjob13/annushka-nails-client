import { Injectable, TemplateRef, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { take, timer } from 'rxjs';
import { Platform, PlatformType } from '../detect-platform';
import { PLATFORM, WINDOW } from '../injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class PwaPromptService {
  private readonly window = inject(WINDOW);
  private readonly platform = inject(PLATFORM);
  private readonly dialogs = inject(TuiDialogService);

  private promptEvent: Event | undefined;

  public initPwaPrompt(templateRef: TemplateRef<null>) {
    // TODO: test it on different devices / browsers !!!
    if (this.platform.isMobile) {
      if (this.platform.platform.ANDROID) {
        this.defineAndroidPrompt(this.platform.platform, templateRef);
      } else if (this.platform.platform.IOS) {
        this.defineIOSPrompt(this.platform.platform, templateRef);
      }
    }
  }

  private openPromptComponent(
    mobileType: PlatformType,
    templateRef: TemplateRef<null>
  ) {
    timer(1500)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.dialogs
            .open(templateRef, {
              data: { mobileType, promptEvent: this.promptEvent },
            })
            .subscribe();
        },
      });
  }

  private defineIOSPrompt(
    platform: Platform['platform'],
    templateRef: TemplateRef<null>
  ) {
    const isInStandaloneMode =
      'standalone' in window.navigator && window.navigator['standalone'];
    if (!isInStandaloneMode) {
      this.openPromptComponent(platform.type, templateRef);
    }
  }

  private defineAndroidPrompt(
    platform: Platform['platform'],
    templateRef: TemplateRef<null>
  ) {
    this.window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.promptEvent = event;
      this.openPromptComponent(platform.type, templateRef);
    });
  }
}
