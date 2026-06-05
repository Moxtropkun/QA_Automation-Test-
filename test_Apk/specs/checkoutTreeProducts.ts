import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/LoginPage'
import MenuPage from '../pageobjects/MenuPage'
import ProductsPage from '../pageobjects/ProductsPage'
import CartPage from '../pageobjects/CartPage'
import CheckoutShippingPage from '../pageobjects/CheckoutShippingPage'

describe('Flujo de seleccion multiple', () => {
    
    before(async () => {
        await MenuPage.goToLogin();
        await LoginPage.login('bob@example.com', '10203040');
    });

    it('Agregacion  de 3 productos', async () => {
      
        await ProductsPage.openFirstProduct();
        await expect(ProductsPage.productScreen).toBeDisplayed();

        await ProductsPage.incrementProductCount(2);

        await ProductsPage.addToCartButton.click(); 

        
        await expect(ProductsPage.cartBadge).toBeDisplayed();

     
        await ProductsPage.goToCart();

     
        await expect(CartPage.cartScreen).toBeDisplayed();
        await CartPage.proceedToCheckout();

    });
});