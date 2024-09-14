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
  private window;
  readonly tg;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.tg = (this.window as unknown as WindowWithTelegram).Telegram.WebApp;
  }

  get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  sendData(data: object) {
    this.tg.sendData(JSON.stringify(data));
  }

  ready() {
    this.tg.ready();
  }
}
