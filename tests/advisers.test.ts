import { Navbar } from "../enums/Navbar";
import test from "../lib/BaseTest";



test(`Verify that the user is able to filter realties by price range`, async ({ loginPage,adviserPage ,header}) => {

    await loginPage.loginToHepsiemlak();

    await header.navigationBar(Navbar.OFFICE_ACCOUNT);

    await adviserPage.addAdviser();
});
