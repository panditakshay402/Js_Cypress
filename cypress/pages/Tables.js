describe("Table Test", ()=>{

    it("Get table data", ()=>{

        cy.visit("https://the-internet.herokuapp.com/tables");

        cy.get("table")
          .contains("Smith")
          .should("exist");

    });

});