import InputPage from "../pages/InputPage";

describe("Input Test", ()=>{

    const input = new InputPage();

    it("Enter Number", ()=>{

        input.visit();
        input.enterNumber();

    });

});