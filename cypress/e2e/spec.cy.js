const header = require("/cypress/pages/headerComponent.js");
const blogPage = require("/cypress/pages/blogPage.js");
const requestDemoModal = require("/cypress/pages/requestDemoModal.js");

describe('Fill in Request a Demo modal', () => {
  before('open noble9 page', ()=> {
    cy.viewport("macbook-15")
    cy.visit('https://www.nobl9.com/')
  });
  it('on a blog article page', () => {
    header.resourcesButton.click()
    header.blogButton.click()
    cy.url().should('eq', 'https://www.nobl9.com/resources')

    blogPage.getLearnMoreButton(blogPage.latestBlogPost).click()
    cy.get('.blog-post').should('be.visible')

    header.requestDemoButton.click()

    requestDemoModal.getIframeBody()



    // const labels = ['Email', 'First name', 'Last name', 'Company name', 'Job title']
    //
    // labels.forEach((label) => {
    //   cy.fixture('userData').as('userData');
    //   cy.get('@userData').then(userData => {
    //     requestDemoModal.getFieldByLabel(label).click().type(userData[label]);
    //   });
    // });
    // requestDemoModal.closeModalButton.click()



  });
})