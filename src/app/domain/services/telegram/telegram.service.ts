import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

// интерфейс для функционала кнопок
interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
  onClick(fn: () => void): void;
  offClick(fn: () => void): void;
  enable(): void;
  disable(): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WindowWithTelegram = Window & { Telegram: { WebApp: any } };

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private window: WindowWithTelegram;
  readonly tg;
  readonly user: unknown;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView as unknown as WindowWithTelegram;
    this.tg = (this.window as unknown as WindowWithTelegram).Telegram.WebApp;
    this.user = this.window.Telegram.WebApp.initDataUnsafe.user;
    console.log('this.tg.initDataUnsafe', this.window.Telegram.WebApp);
  }

  get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  get userData() {
    return this.tg.initDataUnsafe.user;
  }

  sendData(data: object) {
    this.tg.sendData(JSON.stringify(data));
  }

  ready() {
    this.tg.ready();
    return this.userData;
  }
}
