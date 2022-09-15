

import type { Page } from '@playwright/test';
import { WebActions } from '../lib/WebActions';

let webActions: WebActions;

export class Header {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigationBar(navbar: string) {

        await webActions.clickElement(`a:has-text('${navbar}')`);
    }



}