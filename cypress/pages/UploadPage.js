class UploadPage {

    visit() {
        cy.visit("https://the-internet.herokuapp.com/upload");
    }

    uploadFile() {
        cy.get("#file-upload")
          .selectFile("cypress/fixtures/example.json");

        cy.get("#file-submit").click();
    }
}

export default UploadPage;