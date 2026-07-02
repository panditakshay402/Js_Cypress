import DropdownPage from "../pages/DropdownPage";

describe("Dropdown Test", ()=>{

    const dropdown = new DropdownPage();

    it("Select Dropdown", ()=>{

        dropdown.visit();
        dropdown.selectOption();

    });

});