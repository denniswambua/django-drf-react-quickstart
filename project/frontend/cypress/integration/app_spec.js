describe("Django Rest Framework / React quickstart app", () => {
    const lead = {
        name: "Armin",
        email: "Some-email@gmail.com",
        message: "I am lokking for a react tutor"
    };

    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });

    it("should be able to fill a web form", () =>{
        cy.visit("/");

        cy
            .get('input[name="name"]')
            .type(lead.name)
            .should("have.value", lead.name);

         cy
            .get('input[name="email"]')
            .type(lead.email)
            .should("have.value", lead.email);
        cy
            .get('textarea[name="message"]')
            .type(lead.message)
            .should("have.value", lead.message);
        cy.get("form").submit();
    });

    it("should be able to see table", () =>{
        cy.visit("/");

        cy.get("tr").contains(`${lead.name}${lead.email}${lead.message}`);
    });
});