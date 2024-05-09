import { Locator, Page } from "@playwright/test";
import { baseData, loginData, otherData, searchData } from "../data";


class HomePage {
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
      .getByAltText(loginData.userFirstName);
    this.profileLink = page.getByRole("list").getByLabel("Profile");
  }

  async gotoHomePage() {
    await this.page.goto(baseData.url);
  }

  async searchBook() {
    await this.searchbar.fill(searchData.searchedBook);
    await this.page.keyboard.press("Enter");
  }

  async clickGeneralUpdate() {
    await this.generalUpdateButton.click();
  }

  async writeGeneralUpdate() {
    await this.generalUpdateTextArea.fill(otherData.generalUpdateText);
  }

  async saveUpdate() {
    await this.updateSaveButton.click();
  }
}
export default HomePage;
