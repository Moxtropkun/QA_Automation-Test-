import BasePage from './BasePage';

class CheckoutPaymentPage extends BasePage {
    get paymentScreen() {
        return $('~checkout payment screen');
    }

    get fullNameInput() {
        return $('~Full Name* input field');
    }

    get cardNumberInput() {
        return $('~Card Number* input field');
    }

    get expirationDateInput() {
        return $('~Expiration Date* input field');
    }

    get securityCodeInput() {
        return $('~Security Code* input field');
    }

    get reviewOrderButton() {
        return $('~Review Order button');
    }

    async fillPaymentDetails(name: string, cardNum: string, expDate: string, cvc: string) {
        await this.type(this.fullNameInput, name);
        await this.type(this.cardNumberInput, cardNum);
        await this.type(this.expirationDateInput, expDate);
        await this.type(this.securityCodeInput, cvc);
        
        
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }

        await this.click(this.reviewOrderButton);
    }
}

export default new CheckoutPaymentPage();