import { Page } from "@playwright/test";
import { otherData } from "../data";

class ProfilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProfilePage() {
    await this.page.goto(otherData.profileUrl);
  }
}
export default ProfilePage;
