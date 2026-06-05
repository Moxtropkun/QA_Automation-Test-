import BasePage from './BasePage';

class LoginPage extends BasePage {

    get usernameInput() {
        return $('~Username input field');
    }

    get passwordInput() {
        return $('~Password input field');
    }

    get loginButton() {
        return $('~Login button');
    }

    get errorMessage() {
            return $('~generic-error-message');
    }

    async login(username: string, password: string) {

        await this.type(this.usernameInput, username);

        await this.type(this.passwordInput, password);

        await this.click(this.loginButton);
    }
}

export default new LoginPage();