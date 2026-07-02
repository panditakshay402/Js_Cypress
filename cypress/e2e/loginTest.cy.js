import LoginPage from "../pages/LoginPage";

describe("Heroku Login Test", () => {

    const loginPage = new LoginPage();

    it("Login with valid credentials", () => {

        loginPage.visit();

        loginPage.enterUsername("tomsmith");

        loginPage.enterPassword("SuperSecretPassword!");

        loginPage.clickLogin();

        loginPage.verifySuccess();
    });

});