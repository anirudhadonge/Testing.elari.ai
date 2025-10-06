import { Basepage } from "./BasePage";
import {Page} from '@playwright/test'
import {expect} from '@playwright/test'
export class ProductSearchPage extends Basepage{
    
    lineCardMenu =  ".mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined";     //[class^='mat-mdc-select ng-valid ng-touched ng-dirty']";
    lineCardOptions = "[class^='mat-mdc-option mdc-list-item']";//.mat-option.mat-mdc-option.mdc-list-item"
    searchInput = '[placeholder="Search by brand, series and keyword(s)"]';
    searchButton = '[aria-label="Search"]';
    constructor(page:Page){
        super(page);
    }

    async selectLinCard(lineCardName:string){
        await this.waitforTimeOut(5000);
        await this.clickOnElement(this.lineCardMenu);
        await this.clickOnElement(`${this.lineCardOptions}:has-text('${lineCardName}')`);
    }

    async inputSearchItem(item:string){
        await this.waitforTimeOut(5000);
        await this.pressSequencially(this.searchInput,item);
        await this.clickOnElement(this.searchButton);
    }

    async validateSeachedProductIsListed(productName:string){
        await this.waitforTimeOut(5000);
        let count= await this.getCount(`//*[@class = 'product-name' and contains(text(),'${productName}')]`);
        expect(count>0).toBeTruthy();
    }
}