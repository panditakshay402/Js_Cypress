import UploadPage from "../pages/UploadPage";

describe("Upload Test", ()=>{

    const upload = new UploadPage();

    it("Upload File", ()=>{

        upload.visit();
        upload.uploadFile();

    });

});