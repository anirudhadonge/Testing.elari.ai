import { Page } from 'playwright';

export class Basepage{
    page: Page
    constructor(page:Page) {
        this.page = page;
    }

    async goto(url:string){
        await this.page.goto(url);
    }
}