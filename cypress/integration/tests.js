import { getDomainLocale } from "next/dist/next-server/lib/router/router";

beforeEach(() => {
  cy.task("resetDb");
});

it("can sign up", () => {
  cy.visit("/");
  cy.get("a").contains("Sign Up").click();
  cy.visit("/signup");
  cy.get("input[name='name']").type("Mariya");
  cy.get("input[name='email']").type("Mariya@gmail.com");
  cy.get("button").contains("Next").click();
  cy.get("select").select("nb");
  cy.get("button").contains("Next").click();
  cy.get("input[name='Punjabi']").check();
  cy.get("input[name='Punjabi']").uncheck();
  cy.get("input[name='Arabic']").check();
  cy.get("input[name='English']").check();
  cy.get("input[name='kindAgreement']").check();
  cy.get("button").contains("Submit").click();
});
