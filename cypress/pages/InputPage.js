class InputPage {

    visit() {
        cy.visit("https://the-internet.herokuapp.com/inputs");
    }

    enterNumber() {
        cy.get("input").type("500");
    }
}

export default InputPage;