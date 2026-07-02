describe("Button Test", ()=>{

    it("Click Example", ()=>{

        cy.visit("https://example.cypress.io");

        cy.contains("type").click();

    });

});