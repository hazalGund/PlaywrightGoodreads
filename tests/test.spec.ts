import { test, expect } from "@playwright/test";
import { loginData, searchData } from "../data";
import HomePage from "../PageObjects/HomePage";
import ProfilePage from "../PageObjects/ProfilePage";
import LoginPage from "../PageObjects/LoginPage";

let loginPage: LoginPage;
let homePage: HomePage;
let profilePage: ProfilePage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  profilePage = new ProfilePage(page);

  await loginPage.login(loginData.username, loginData.password);
});

test("search for a book", async ({ page }) => {
  await homePage.gotoHomePage();
  await homePage.searchBook();

  await expect(page).toHaveTitle(searchData.searchResultTitle);
});
