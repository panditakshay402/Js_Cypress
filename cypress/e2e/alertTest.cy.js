import AlertPage from "../pages/AlertPage";

describe("Alert Test", ()=>{

    const alert = new AlertPage();

    it("Handle Alert", ()=>{

        cy.on("window:alert",(text)=>{

            expect(text).to.equal("I am a JS Alert");

        });

        alert.visit();

        alert.clickAlert();

    });

});