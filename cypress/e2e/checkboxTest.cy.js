import CheckboxPage from "../pages/CheckboxPage";

describe("Checkbox Test", ()=>{

    const checkbox = new CheckboxPage();

    it("Check and Uncheck", ()=>{

        checkbox.visit();
        checkbox.selectCheckbox1();
        checkbox.unselectCheckbox2();

    });

});