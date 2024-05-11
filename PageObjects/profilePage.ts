import { Locator, Page } from "@playwright/test";

class ProfilePage {
  readonly page: Page;
  readonly currentlyReadingLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.currentlyReadingLink = page.getByRole("link", {
      name: "currently-reading‎ (1)",
    });
  }

  async gotoCurrentlyReading() {
    await this.currentlyReadingLink.click();
  }

  async assertElementExists() {
    try {
      // Wait for the presence of the element
      await this.page.waitForSelector(
        'a[title="The Pragmatic Programmer: From Journeyman to Master"]'
      );

      console.log("Element is present on the page.");
    } catch (error) {
      console.log("Element is not present on the page.");
    }
  }
}

export default ProfilePage;
