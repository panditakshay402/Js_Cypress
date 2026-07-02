class AlertPage {

    visit() {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    }

    clickAlert() {
        cy.contains("Click for JS Alert").click();
    }
}

export default AlertPage;