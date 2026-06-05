import BasePage from './BasePage';

class ProductsPage extends BasePage {

    get productScreen() {
        return $('~product screen'); 
    }

    get firstProductContainer() {
        return $('~store item');
    }

    get addToCartButton() {
        return $('~Add To Cart button');
    }
    
    get cartBadge() {
        return $('~cart badge');
    }

    get counterPlusButton() { 
        return $('~counter plus button'); 
    }

    get counterAmount() { 
        return $('~counter amount'); 
    }

    async openFirstProduct() {
        await this.click(this.firstProductContainer);
    }
    

    async addToCart() {
        await this.click(this.addToCartButton);
    }
    async goToCart() {
        await this.click(this.cartBadge);
    }
    async incrementProductCount(times: number) {
        for (let i = 0; i < times; i++) {
            await this.counterPlusButton.click();
        
        }
    }

    async getCounterValue() {
        const element = await this.counterAmount;
        const text = await element.getText();
        return text || await element.getAttribute('text') || await element.getAttribute('content-desc');
    }
}

export default new ProductsPage();