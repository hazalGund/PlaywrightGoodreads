import { test, expect } from "@playwright/test";
import { loginData, readingChallengeData, searchData } from "../data";
import HomePage from "../PageObjects/HomePage";
import ProfilePage from "../PageObjects/ProfilePage";
import LoginPage from "../PageObjects/LoginPage";
import ChallengePage from "../PageObjects/ChallengePage";

let loginPage: LoginPage;
let homePage: HomePage;
let profilePage: ProfilePage;
let challengePage: ChallengePage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  profilePage = new ProfilePage(page);
  challengePage = new ChallengePage(page);

  await loginPage.login(loginData.username, loginData.password);
});

test("search for a book", async ({ page }) => {
  await homePage.searchBook();

  await expect(page).toHaveTitle(searchData.searchResultTitle);
});

test("go to currently reading", async ({}) => {
  await homePage.gotoProfilePage();
  await profilePage.gotoCurrentlyReading();
  await profilePage.assertElementExists();
});

test("set a reading challenge", async ({ page }) => {
  await homePage.setReadingChallenge();
  await homePage.viewChallenge();

  expect(
    page.getByRole("link", {
      name:
        "You have read 0 of " + readingChallengeData.numberOfBooks + " books.",
    }).isVisible
  );

  await challengePage.leaveChallenge();
});
