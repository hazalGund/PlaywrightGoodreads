import { expect, Page } from "@playwright/test";
import { baseData, titlesData } from "../data.ts";

class LoginPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.goto(baseData.url);
    await expect(this.page).toHaveTitle(titlesData.firstTitle);
    await this.page.getByRole("link", { name: "Sign In" }).click();
    await expect(this.page).toHaveTitle(titlesData.secondTitle);
    await this.page.getByRole("button", { name: "Sign in with email" }).click();
    await expect(this.page).toHaveTitle(titlesData.thirdTitle);
    await this.page.locator("#ap_email").fill(username);
    await this.page.locator("#ap_password").fill(password);
    await this.page.locator("#signInSubmit").click();
    await expect(this.page).toHaveTitle(titlesData.homePageTitle);
  }
}
export default LoginPage;
