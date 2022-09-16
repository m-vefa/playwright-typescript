import { expect } from "@playwright/test";
import test from "../../lib/BaseTest";


test(`Visual Validation for homepage`, async ({ loginPage}) => {

    await loginPage.loginToHepsiemlak();
    await loginPage.visualTest('homepage.png');



});
