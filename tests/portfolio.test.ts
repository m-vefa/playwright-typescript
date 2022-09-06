import { Navbar } from "../enums/Navbar";
import test from "../lib/BaseTest";



test(`Verify that the user is able to login by entering valid credentials`, async ({ loginPage,portfolioPage ,header}) => {

    await loginPage.loginToHepsiemlak();

    await header.navigationBar(Navbar.PORTFOLIO);

    await portfolioPage.filterProductsByPriceRange();
});
