class DropdownPage {

    visit() {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
    }

    selectOption() {
        cy.get("#dropdown").select("Option 1");
    }
}

export default DropdownPage;