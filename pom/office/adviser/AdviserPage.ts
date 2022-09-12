import type { Page } from '@playwright/test';
import { WebActions } from '../../../lib/WebActions';
import { AdviserElements } from './AdviserElements';


let webActions: WebActions;

export class AdviserPage extends AdviserElements {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }
    async addAdviser() {

        await this.advisersInOffice();
        await this.clickOnAddAdviser();

        await this.enterFirstName('vefa')
        await this.enterLastName('vefa')
        await this.enterEmail('vefa@yopmail.com')
        await this.selectDate('12','12','1994')
        await this.enterPassword('vefa123456')
        await this.enterConfirmPassword('vefa123456')
       

    }



    private async advisersInOffice() {
        await webActions.clickElement(AdviserElements.ADVISER);
    }

    private async clickOnAddAdviser() {
        await webActions.clickElement(AdviserElements.ADD_ADVISER_BUTTON)

    }

    private async getInputInModal(inputId: string) {
        return `//input[@id='${inputId}']`;
    }

    public async enterFirstName(firstName: string) {
        await webActions.enterElementText(await this.getInputInModal('firstName'), firstName);

    }

    private async enterLastName(lastName: string) {
        await webActions.enterElementText(await this.getInputInModal('lastName'), lastName);
    }

    private async enterEmail(email: string) {
        await webActions.enterElementText(await this.getInputInModal('email'), email);
    }

    private async selectDate(day: string,month: string,year: string) {


      await webActions.selectOptionFromDropdown(`select[id ='days']`,day )
      await webActions.selectOptionFromDropdown(`select[id ='month']`, month)
      await webActions.selectOptionFromDropdown(`select[id ='year']`,year)

    }


    private async enterPassword(password: string) {
        await webActions.enterElementText(await this.getInputInModal('password'), password);

    }

    private async enterConfirmPassword(confirmedPassword: string) {
        await webActions.enterElementText(await this.getInputInModal('password-confirm'), confirmedPassword);
    }
}





