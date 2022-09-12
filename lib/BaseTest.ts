import { test as baseTest } from '@playwright/test';
import { Header } from '../pom/header';
import { LoginPage } from '../pom/login/LoginPage';
import { AdviserPage } from '../pom/office/adviser/AdviserPage';
import { PortfolioPage } from '../pom/portfolio/PortfolioPage';

type MyFixtures = {
    loginPage: LoginPage;
    portfolioPage: PortfolioPage;
    adviserPage: AdviserPage;
    header:Header
  };
  

const test = baseTest.extend<MyFixtures>
    ({
        loginPage: async ({ page }, use) => {
            await use(new LoginPage(page));
        },
        header: async ({ page }, use) => {
            await use(new Header(page));
        },

        portfolioPage: async ({ page }, use) => {
            await use(new PortfolioPage(page));
        },

        adviserPage: async ({ page }, use) => {
            await use(new AdviserPage(page));
        },

    });

export default test;