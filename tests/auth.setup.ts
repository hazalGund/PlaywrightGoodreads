import { test as setup, expect } from "@playwright/test";
import { data } from "../data.ts";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto(data.baseUrl);

  await expect(page).toHaveTitle(data.authentication.firstTtitle);

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page).toHaveTitle(data.authentication.secondTitle);

  await page.getByRole("button", { name: "Sign in with email" }).click();

  await expect(page).toHaveTitle(data.authentication.thirdTitle);

  await page.locator("#ap_email").fill("hazalgunduz@yahoo.com");
  await page.locator("#ap_password").fill("Asdfasdf123");
  await page.locator("#signInSubmit").click();

  await expect(page).toHaveTitle(data.authentication.homePageTitle);

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
