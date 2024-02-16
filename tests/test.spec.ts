import { test, expect } from "@playwright/test";
import { data } from "../data";
import { HomePage } from "../PageObjects/homePage";

test("search for a book", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.gotoHomePage();
  await homePage.searchBook();

  await expect(page).toHaveTitle(data.search.searchResultTitle);
});
