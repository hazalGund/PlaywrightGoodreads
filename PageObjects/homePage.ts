import { Locator, Page } from "@playwright/test";
import { data } from "../data";

export class HomePage {
  readonly page: Page;
  readonly searchbar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchbar = page.getByRole("banner").getByPlaceholder("Search books");
  }

  async gotoHomePage() {
    await this.page.goto(data.baseUrl);
  }

  async searchBook() {
    await this.searchbar.fill(data.search.searchedBook);
    await this.page.keyboard.press("Enter");
  }
}
