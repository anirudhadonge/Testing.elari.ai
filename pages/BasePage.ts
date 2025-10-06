import { Page, Locator } from 'playwright';

export class Basepage{
    page: Page
    constructor(page:Page) {
        this.page = page;
    }

    async goto(url:string){
        await this.page.goto(url);
    }

    async clickOnElement(locator:string, index:number=0){
        await this.getElement(locator,index).click();
    }

    getElement(locator:string,index:number=0) :Locator{
        return this.page.locator(locator).nth(index);
    }

    async pressSequencially(locator:string, text:string,index:number=0){
        await this.getElement(locator).nth(index).pressSequentially(text);
    }

    async fill(locator:string, text:string,index:number=0){
        await this.getElement(locator).nth(index).fill(text);
    }
    async getCount(locator:string):Promise<number>{
        return await this.page.locator(locator).count();
    }

    async waitforTimeOut(timeOut:number){
        await this.page.waitForTimeout(timeOut);
    }
}