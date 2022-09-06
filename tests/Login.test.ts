import { Navbar } from "../enums/Navbar";
import test from "../lib/BaseTest";



test(`Verify that the user is able to login by entering valid credentials`, async ({ loginPage }) => {

    await loginPage.loginToHepsiemlak();
});
