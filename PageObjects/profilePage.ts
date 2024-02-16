import { Locator, Page } from "@playwright/test";
import { data } from "../data";

export class ProfilePage {
  readonly page: Page;
  readonly updateExpectedText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateExpectedText = page.getByText(
      "added a status update: I love books!"
    );
  }

  async navigateToProfilePage(){
    await this.page.goto(data.profileUrl);
  }

  async deleteUpdate(){
    this.page.on("dialog", async (dialogWindow) => {
      await dialogWindow.accept();
    });
  
    await this.page.getByAltText("Delete").click();
  }
}
