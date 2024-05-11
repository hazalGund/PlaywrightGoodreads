import { Locator, Page } from "@playwright/test";

class ChallengePage {
  readonly page: Page;
  readonly editChallengeButton: Locator;
  readonly leaveChallengeButton: Locator;
  readonly leaveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editChallengeButton = page.getByRole("link", { name: "Edit" });
    this.leaveChallengeButton = page.getByTitle("Leave challenge");
    this.leaveButton = page.getByRole("button", { name: "Leave" });
  }

  async leaveChallenge() {
    await this.editChallengeButton.click();
    await this.leaveChallengeButton.click();
    await this.leaveButton.click();
  }
}
export default ChallengePage;
