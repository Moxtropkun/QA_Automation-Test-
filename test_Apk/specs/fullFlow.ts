import MenuPage from '../pageobjects/MenuPage';
import LoginPage from '../pageobjects/LoginPage';
import ProductsPage from '../pageobjects/ProductsPage';
import CartPage from '../pageobjects/CartPage';
import CheckoutShippingPage from '../pageobjects/CheckoutShippingPage';
import CheckoutPaymentPage from '../pageobjects/CheckoutPaymentPage';
import CheckoutReviewPage from '../pageobjects/CheckoutReviewPage';

describe('Flujo Completo, logion y compra', () => {

    it('Flujo desde login hasta finalizar compra', async () => {
        await MenuPage.goToLogin();
        await LoginPage.login('bob@example.com', '10203040');

        
        await ProductsPage.openFirstProduct();
        await expect(ProductsPage.productScreen).toBeDisplayed();
        await ProductsPage.addToCart();
        await expect(ProductsPage.cartBadge).toBeDisplayed();

     
        await ProductsPage.goToCart();
        await expect(CartPage.cartScreen).toBeDisplayed();
        await CartPage.proceedToCheckout();

     
        await CheckoutShippingPage.fillShippingDetails(
            'Jose Monsalve',
            'Calle 105 #23',
            'Apto 402',
            'Bucaramanga',
            'Santander',
            '680001',
            'Colombia'
        );

      
        await CheckoutPaymentPage.fillPaymentDetails(
            'Jose Monsalve',
            '4111111111111111',
            '12/29',
            '123'
        );


        await expect(CheckoutReviewPage.reviewScreen).toBeDisplayed();
        await CheckoutReviewPage.placeOrder();

        
        await expect(CheckoutReviewPage.checkoutCompleteScreen).toBeDisplayed();
    });
});