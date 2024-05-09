import { Page } from "@playwright/test";
import { profileData } from "../data";

class ProfilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProfilePage() {
    await this.page.goto(profileData.url);
  }
}
export default ProfilePage;
