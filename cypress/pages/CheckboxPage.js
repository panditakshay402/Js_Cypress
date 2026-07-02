class CheckboxPage {

    visit() {
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
    }

    selectCheckbox1() {
        cy.get("input").first().check();
    }

    unselectCheckbox2() {
        cy.get("input").last().uncheck();
    }
}

export default CheckboxPage;