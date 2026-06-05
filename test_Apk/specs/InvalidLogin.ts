import MenuPage from '../pageobjects/MenuPage';
import LoginPage from '../pageobjects/LoginPage';

describe('Login Invalid', () => {

    it('should display error message for invalid credentials', async () => {

        await MenuPage.goToLogin();

        await LoginPage.login(
            'Sebastian Monsalve',
            '1020304012'
        );

        await expect(
            LoginPage.errorMessage
        ).toBeDisplayed();

    });
});