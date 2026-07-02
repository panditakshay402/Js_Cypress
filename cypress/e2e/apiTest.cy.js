describe("API Test", ()=>{

    it("GET API", ()=>{

        cy.request("GET",
        "https://jsonplaceholder.typicode.com/posts/1")

        .then((response)=>{

            expect(response.status).to.equal(200);

        });

    });

});