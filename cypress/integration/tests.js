// beforeEach(() => {
//   cy.task("resetDb");
// });

// it("can load the landing page", () => {
//   cy.visit("/");
// });

it("can sign up", () => {
  cy.visit("/");
  cy.get("a").contains("Sign Up").click();
  cy.visit("/signup");
  cy.get("input[name='name']").type("Mariya");
  cy.get("input[name='email']").type("Mariya@gmail.com");
  cy.get("button").contains("Next").click();
  cy.get("select").select("nb");
  cy.get("button").contains("Next").click();
  cy.get("input[name='women']").check();
  cy.get("button").contains("Next").click();
  cy.get("input[name='Punjabi']").check();
  cy.get("input[name='Punjabi']").uncheck();
  cy.get("input[name='Arabic']").check();
  cy.get("input[name='English']").check();
  cy.get("button").contains("Next").click();
  cy.get("input[name='kindAgreement']").check();
  cy.get("button").contains("Submit").click();
});

// it("can log in", () => {
//   cy.visit("/");
//   cy.get("a").contains("Log In").click();
//   cy.visit("/api/auth/signin");
//   cy.get("input[name='email']").type("mg5640041@gmail.com");
//   cy.get("button").contains("Sign").click();
//   cy.setCookie(
//     "next-auth.session-token",
//     "eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiTWFyeWFtIiwiZW1haWwiOiJtZzU2NDAwNDFAZ21haWwuY29tIiwicGljdHVyZSI6Ii4vcHVibGljL2ltYWdlcy9hdmF0b3IucG5nIiwic3ViIjoiMyIsImlhdCI6MTYyMzMyMzk0MiwiZXhwIjoxNjI1OTE1OTQyfQ.wTePyfwSRDL3QCQ12faH51aPX1SuG50OtLzNKFcEpoH_G88BNI6UBemB0hpJDWWRlXBZAHdtzKtUm_MHw95a1w"
//   );
//   cy.visit("/");
// });
