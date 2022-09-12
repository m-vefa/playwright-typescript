import { Navbar } from "../enums/Navbar";
import test from "../lib/BaseTest";



test(`Verify that the user is able to filter realties by price range`, async ({ loginPage,portfolioPage ,header}) => {

    await loginPage.loginToHepsiemlak();

    await header.navigationBar(Navbar.PORTFOLIO);

    await portfolioPage.filterProductsByPriceRange();
});
