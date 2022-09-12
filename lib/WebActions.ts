import { expect, Page } from '@playwright/test';

export class WebActions {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    async navigateToURL(url: string) {

        this.page.goto(url);
    }

    async enterElementText(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }

    async clickElement(locator: string): Promise<void> {
        await this.page.click(locator);
    }
    async getCurrentUrl():Promise<string>  {
        return this.page.url()
    }
    async selectOptionFromDropdown(locator: string, option: string): Promise<void> {

        await this.page.locator(locator).selectOption(option);

    }
    
    async verifyElementText(locator: string, text: string): Promise<void> {
        const textValue = await this.page.textContent(locator);
        expect(textValue).toBe(text);
    }

    async verifyGivenTwoTexts(excepted :string, acutal: string): Promise<void> {
        expect(excepted).toBe(acutal);
    }

}

