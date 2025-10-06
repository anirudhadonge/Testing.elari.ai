
import { test,Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProjectPage } from '../pages/ProjectPage';
import { ProductSearchPage } from '../pages/ProductSearchPage';

let loginPage:LoginPage;
let homePage:ProjectPage;

test.only("Login to application", async ({ page }: { page: Page }) => {
    await page.goto(process.env.BASE_URL);
    loginPage = new LoginPage(page);
    await loginPage.goto(process.env.BASE_URL!.toString());
    await loginPage.loginToApplication(process.env.USERNAME!.toString(), process.env.PASSWORD!.toString());
    homePage = new ProjectPage(page);
    await homePage.verifyHomePage();
    await homePage.selectUser("India Training Account ");
    await homePage.validateUser("India Training Account ");
    await homePage.clickOnProjectBtn();
    await homePage.enterProjectName("newProject");
    await homePage.assigntUser("Deepak Borade ");
    await homePage.selectLineCard("NYC - Combined ELA and Synergy");
    await homePage.enterBidDate("9/26/2025");
    await homePage.setCrossType("Value-Engineered");
    await homePage.uploadFileInProject("file/Quote MHDN25303347.o2o");
    await homePage.clickProjectSave();
})

test("Navigation to menu pages",async({page})=>{
        await page.goto(process.env.BASE_URL);
    loginPage = new LoginPage(page);
    await loginPage.goto(process.env.BASE_URL!.toString());
    await loginPage.loginToApplication(process.env.USERNAME!.toString(), process.env.PASSWORD!.toString());
    homePage = new ProjectPage(page);
    await homePage.verifyHomePage();
    await homePage.clickOnPageMenu("Accounts");
})

test("Product Search",async({page})=>{
    await page.goto(process.env.BASE_URL);
    loginPage = new LoginPage(page);
    await loginPage.goto(process.env.BASE_URL!.toString());
    await loginPage.loginToApplication(process.env.USERNAME!.toString(), process.env.PASSWORD!.toString());
    homePage = new ProjectPage(page);
    await homePage.verifyHomePage();
    await homePage.clickOnSearchProduct();
    const productSearch = new ProductSearchPage(page);
    await productSearch.selectLinCard("RKB Auto 1");
    await productSearch.inputSearchItem("Pendant");
    await productSearch.validateSeachedProductIsListed('Pendant');
})