import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  updateTitle(routerState: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(routerState);
    if (pageTitle) {
      this.title.setTitle(`${pageTitle} - NG A11y`);
    } else {
      this.title.setTitle('NG A11y');
    }
  }
}
