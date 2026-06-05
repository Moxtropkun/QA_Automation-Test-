import BasePage from './BasePage';

class CartPage extends BasePage {
    get cartScreen() {
        return $('~cart screen');
    }

    get proceedToCheckoutButton() {
        return $('~Proceed To Checkout button');
    }

    async isLoaded() {
        return await this.isDisplayed(this.cartScreen);
    }

    async proceedToCheckout() {
        await this.click(this.proceedToCheckoutButton);
    }
}

export default new CartPage();