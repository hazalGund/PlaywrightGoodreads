import { Locator, Page, expect } from "@playwright/test";
import { profileData, readingChallengeData, searchData } from "../data";

class HomePage {
  readonly page: Page;
  readonly searchbar: Locator;
  readonly personIcon: Locator;
  readonly profileLink: Locator;
  readonly spinButton: Locator;
  readonly startChallengeButton: Locator;
  readonly viewChallengeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchbar = page.getByRole("banner").getByPlaceholder("Search books");
    this.personIcon = page
      .getByRole("button")
      .getByAltText(profileData.userFirstName);
    this.profileLink = page.getByRole("link", { name: "Profile" });
    this.spinButton = page.getByRole("spinbutton", {
      name: "Number of books you want to",
    });
    this.startChallengeButton = page.getByRole("button", {
      name: "Start your 2024 reading",
    });
    this.viewChallengeButton = page.getByRole("link", {
      name: "View Challenge",
    });
  }

  async searchBook() {
    await this.searchbar.fill(searchData.searchedBook);
    await this.page.keyboard.press("Enter");
  }

  async gotoProfilePage() {
    await this.personIcon.click();
    await this.profileLink.click();
  }

  async setReadingChallenge() {
    await this.spinButton.click();
    await this.spinButton.fill(readingChallengeData.numberOfBooks);
    await expect(this.startChallengeButton).toBeEnabled({timeout: 10000});
    await this.startChallengeButton.click();
  }

  async viewChallenge() {
    await this.viewChallengeButton.click();
  }
}
export default HomePage;
