import { Locator, Page } from "@playwright/test";
import { data } from "../data";

export class HomePage {
  readonly page: Page;
  readonly searchbar: Locator;
  readonly generalUpdateButton: Locator;
  readonly generalUpdateTextArea: Locator;
  readonly updateSaveButton: Locator;
  readonly personIcon: Locator;
  readonly profileLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchbar = page.getByRole("banner").getByPlaceholder("Search books");
    this.generalUpdateButton = page
      .getByRole("button")
      .getByText("General update");
    this.generalUpdateTextArea = page.locator(
      "#generalStatusUpdateFormTextarea"
    );
    this.updateSaveButton = page.getByRole("button", { name: "Save" });
    this.personIcon = page
      .getByRole("button")
      .getByAltText(data.authentication.userFirstName);
    this.profileLink = page.getByRole("list").getByLabel("Profile");
  }

  async gotoHomePage() {
    await this.page.goto(data.baseUrl);
  }

  async searchBook() {
    await this.searchbar.fill(data.search.searchedBook);
    await this.page.keyboard.press("Enter");
  }

  async clickGeneralUpdate() {
    await this.generalUpdateButton.click();
  }

  async writeGeneralUpdate() {
    await this.generalUpdateTextArea.fill(data.generalUpdateText);
  }

  async saveUpdate() {
    await this.updateSaveButton.click();
  }

  async gotoMyProfile() {
    await this.personIcon.click();
    await this.profileLink.click();
  }
}
