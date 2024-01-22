const { expect } = require("@playwright/test");

exports.BuyPage = class BuyPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.suitcase = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCart = page.locator("a").filter({ hasText: "1" });
    this.buttonContinue = page.locator('[data-test="continue-shopping"]');
    this.flashlight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.shoppingCart1 = page.locator("a").filter({ hasText: "2" });
    this.buttonCheckout = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.buttonContinue1 = page.locator('[data-test="continue"]');
    this.buttonFinish = page.locator('[data-test="finish"]');
  }

  async submitBuyForm(firstName, lastName, postalCode) {
    await this.suitcase.click();
    await this.shoppingCart.click();
    await this.buttonContinue.click();
    await this.flashlight.click();
    await this.shoppingCart1.click();
    await this.buttonCheckout.click();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.buttonContinue1.click();
    await this.buttonFinish.click();
  }
};
