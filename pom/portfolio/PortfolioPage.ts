import type { Page } from '@playwright/test';
import { testConfig } from "../../configuration/testConfig";
import { WebActions } from '../../lib/WebActions';
import { PortfolioElements } from './PortfolioElements';

let webActions: WebActions;

export class PortfolioPage extends PortfolioElements {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }
    async filterProductsByPriceRange() {

        await this.clickOnPrice();
        await this.enterMinPrice();
        await this.enterMaxPrice();
    }

    private async clickOnPrice() {
        await webActions.clickElement(PortfolioElements.PRICE)
    }

    private async enterMinPrice() {
        await webActions.enterElementText(PortfolioElements.MIN_PRICE, '13')
    }

    private async enterMaxPrice() {
        await webActions.enterElementText(PortfolioElements.MAX_PRICE, '199')
    }



}