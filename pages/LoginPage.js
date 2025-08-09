class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#username';
      this.passwordInput = '#password';
      this.loginButton = 'button[type="submit"]';
      this.successHeader = 'h2';
    }
  
    async goto() {
      await this.page.goto('https://the-internet.herokuapp.com/login');
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  
    async getSuccessText() {
      return await this.page.locator(this.successHeader).textContent();
    }
  }
  
  module.exports = { LoginPage };