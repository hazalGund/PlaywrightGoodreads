import { test, expect } from "@playwright/test";
import { data } from "../data";
import { HomePage } from "../PageObjects/homePage";
import { ProfilePage } from "../PageObjects/profilePage";

test("search for a book", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.gotoHomePage();
  await homePage.searchBook();

  await expect(page).toHaveTitle(data.search.searchResultTitle);
});

test("share a general update", async ({ page }) => {
  const homePage = new HomePage(page);
  const profilePage = new ProfilePage(page);
  await homePage.gotoHomePage();
  await homePage.clickGeneralUpdate();

  await expect(homePage.generalUpdateTextArea).toBeEditable();

  await homePage.writeGeneralUpdate();
  await homePage.saveUpdate();

  await homePage.gotoMyProfile();
  await expect(profilePage.updateExpectedText).toBeVisible();
});
