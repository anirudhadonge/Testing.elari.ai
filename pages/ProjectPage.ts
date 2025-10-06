import { expect, Page } from "@playwright/test";
import { Basepage } from "./BasePage";


export class ProjectPage extends Basepage{
    homePageBody:string="body.mat-typography";
    headerOption :string =".mat-mdc-button-persistent-ripple.mdc-button__ripple"
    addProjectBtn:string=".mdc-button__label:has-text('Add Project')";
    projectNameInput:string="#mat-input-1";
    assignUserDropdown:string = "[formcontrolname='assignedUser']";
    cardLineDropdown:string = "[formcontrolname='lineCard']"
    projectSaveBtn:string = ".mdc-button__label:has-text('Save')";
    bidDateInput:string="[formcontrolname='bidDate']";
    crossTypeDropDown:string ="[formcontrolname='crossType']";
    menuLocator :string = '[aria-haspopup="menu"]';
    menu:string=".mat-mdc-list-item-unscoped-content.mdc-list-item__primary-text";
    productSearchLink = "[href='/product']";
    uploadfileBtn="//span[text()=' Browse ']//ancestor::button";

    constructor(page: Page) {
        super(page);
    }

    async verifyHomePage(){
       await expect(await this.page.locator(this.homePageBody)).toBeVisible();
    }

    async selectUser(userName:string){
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.headerOption).nth(2).click();
        await this.page.locator(`.mat-mdc-menu-item-text:has-text('${userName}')`).click();
    }

    async validateUser(userName:string){
        await expect(this.page.locator(`.mdc-button__label:has-text('${userName}')`)).toBeVisible();
    }

    async clickOnProjectBtn(){
        await this.page.locator(this.addProjectBtn).click();
    }

    async enterProjectName(projectName:string){
        await this.page.locator(this.projectNameInput).fill(projectName);
    }

    async assigntUser(userName:string){
        await this.page.locator(this.assignUserDropdown).click();
        await this.page.locator(`.mat-mdc-option.mdc-list-item:has-text('${userName}')`).click();
    }

    async selectLineCard(lineCard:string){
        await this.page.locator(this.cardLineDropdown).click();
        await this.page.locator(`.mat-mdc-option.mdc-list-item:has-text('${lineCard}')`).click();
    }

    async clickProjectSave(){
        await this.page.locator(this.projectSaveBtn).click();
    }

    async enterBidDate(date:string){
        await this.page.locator(this.bidDateInput).fill(date);
    }

    async setCrossType(crossType:string){
        await this.page.locator(this.crossTypeDropDown).click();
        await this.page.locator(`.mat-mdc-option.mdc-list-item:has-text('${crossType}')`).click();
    }

    async clickOnPageMenu(pageName:string){
        await this.clickOnElement(this.menuLocator,1);
        await this.clickOnElement(`${this.menu}:has-text('${pageName}')`);
    }

    async clickOnSearchProduct(){
        await this.clickOnElement(this.productSearchLink);
    }

    async uploadFileInProject(fileName:string){
        await this.uploadFile(this.uploadfileBtn,fileName);
    }
}