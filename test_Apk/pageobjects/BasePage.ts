export default class BasePage {

    async waitForElement(element: WebdriverIO.Element) {
        await element.waitForDisplayed({
            timeout: 10000
        });
    }

    async click(element: WebdriverIO.Element) {
        await this.waitForElement(element);
        await element.click();
    }

    async type(element: WebdriverIO.Element, value: string) {
        await this.waitForElement(element);

        await element.clearValue();
        await element.setValue(value);
    }

    async getText(element: WebdriverIO.Element): Promise<string> {
        await this.waitForElement(element);
        return await element.getText();
    }

    async isDisplayed(element: WebdriverIO.Element): Promise<boolean> {
        return await element.isDisplayed();
    }
}