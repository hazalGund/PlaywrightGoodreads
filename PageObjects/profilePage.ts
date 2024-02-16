import { Locator, Page } from "@playwright/test";

export class ProfilePage {
  readonly page: Page;
  readonly updateExpectedText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateExpectedText = page.getByText(
      "added a status update: I love books!"
    );
  }
}
