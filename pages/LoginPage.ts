
import { Page } from "playwright";
import {Basepage} from "./BasePage";

export class LoginPage extends Basepage{
    userName:string = "#username";
    password:string = "#current-password";
    login:string = ".login-button.btn.btn-primary";
    loginButton:string="span.mdc-button__label";
    constructor(page:Page) {
        super(page);
    }

    async loginToApplication(username: string, password: string) {
    await this.page.locator(this.loginButton).click();
    await this.page.fill(this.userName, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.login);
    }
}