import MenuPage from '../pageobjects/MenuPage';
import LoginPage from '../pageobjects/LoginPage';

describe('Login Success', () => {

    it('should login successfully', async () => {

        await MenuPage.goToLogin();

        await LoginPage.login(
            'bob@example.com',
            '10203040'
        );

        await expect(
            $('~products screen')
        ).toBeDisplayed();

    });

});