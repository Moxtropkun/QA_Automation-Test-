import BasePage from './BasePage';

class MenuPage extends BasePage {

    get menuButton() {
        return $('~open menu');
    }

    get loginMenuItem() {
        return $('~menu item log in');
    }

    async goToLogin() {
        await this.click(this.menuButton);
        await this.click(this.loginMenuItem);
    }
}

export default new MenuPage();