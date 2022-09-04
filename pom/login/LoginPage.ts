import type { Page } from '@playwright/test';
import { testConfig } from "../../configuration/testConfig";
import { WebActions } from '../../lib/WebActions';
import { LoginElement } from './LoginElement';

let webActions: WebActions;

export class LoginPage extends LoginElement {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    private async waitUntilLogin() {
        await this.page.waitForURL(testConfig.myAccountUrl);
    }

    private async clickOnSignInButton() {
        await webActions.clickElement(LoginElement.SIGN_IN_BUTTON_ID);
    }

    private async enterPassword() {
        await webActions.enterElementText(LoginElement.PASSWORD_EDITBOX_ID, testConfig.password);
    }

    private async enterEmail() {
        await webActions.enterElementText(LoginElement.EMAIL_EDITBOX_ID, testConfig.username);
    }

    private async goToLoginPage() {
        await webActions.navigateToURL(testConfig.loginUrl);
    }

    async loginToHepsiemlak() {
        await this.goToLoginPage();
        await this.enterEmail();
        await this.enterPassword();

        await this.clickOnSignInButton();
        await this.waitUntilLogin();
        let url = await webActions.getCurrentUrl();
        await webActions.verifyGivenTwoTexts(testConfig.myAccountUrl, url)
    }
}