import { test as baseTest } from '@playwright/test';
import { Header } from '../pom/header';
import { LoginPage } from '../pom/login/LoginPage';
import { PortfolioPage } from '../pom/portfolio/PortfolioPage';

type MyFixtures = {
    loginPage: LoginPage;
    portfolioPage: PortfolioPage;
    header:Header
  };
  

const test = baseTest.extend<MyFixtures>
    ({
        loginPage: async ({ page }, use) => {
            await use(new LoginPage(page));
        },

        portfolioPage: async ({ page }, use) => {
            await use(new PortfolioPage(page));
        },
        header: async ({ page }, use) => {
            await use(new Header(page));
        },

    });

export default test;