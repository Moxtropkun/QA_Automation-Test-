import BasePage from './BasePage';

class CheckoutShippingPage extends BasePage {
    get shippingScreen() {
        return $('~checkout shipping address screen');
    }

    get fullNameInput() {
        return $('~Full Name* input field');
    }

    get addressLine1Input() {
        return $('~Address Line 1* input field');
    }

    get addressLine2Input() {
        return $('~Address Line 2 input field');
    }

    get cityInput() {
        return $('~City* input field');
    }

    get stateInput() {
        return $('~State/Region input field');
    }

    get zipCodeInput() {
        return $('~Zip Code* input field');
    }

    get countryInput() {
        return $('~Country* input field');
    }

    get toPaymentButton() {
        return $('~To Payment button');
    }

    async fillShippingDetails(name: string, addr1: string, addr2: string, city: string, state: string, zip: string, country: string) {
        await this.type(this.fullNameInput, name);
        await this.type(this.addressLine1Input, addr1);
        await this.type(this.addressLine2Input, addr2);
        await this.type(this.cityInput, city);
        await this.type(this.stateInput, state);
        await this.type(this.zipCodeInput, zip);
        await this.type(this.countryInput, country);
        
      
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }

        await this.click(this.toPaymentButton);
    }
}

export default new CheckoutShippingPage();