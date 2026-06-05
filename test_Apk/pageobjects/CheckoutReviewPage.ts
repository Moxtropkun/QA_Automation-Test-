import BasePage from './BasePage';

class CheckoutReviewPage extends BasePage {
    get reviewScreen() {
        return $('~checkout review order screen');
    }

    get placeOrderButton() {
        return $('~Place Order button');
    }

    get checkoutCompleteScreen() {
        return $('~checkout complete screen');
    }

    get continueShoppingButton() {
        return $('~Continue Shopping button');
    }

    async placeOrder() {
        await this.click(this.placeOrderButton);
    }

    async isOrderComplete() {
        return await this.isDisplayed(this.checkoutCompleteScreen);
    }
}

export default new CheckoutReviewPage();