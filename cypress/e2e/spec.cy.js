const header = require("/cypress/pages/headerComponent.js");
const blogPage = require("/cypress/pages/blogPage.js");
const requestDemoModal = require("/cypress/pages/requestDemoModal.js");

describe('Fill in Request a Demo modal', () => {
    before('open noble9 page', () => {
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

        const labels = ['Email', 'First name', 'Last name', 'Company name', 'Job title']
        labels.forEach((fieldLabel) => {
            cy.fixture('userData').as('userData');
            cy.get('@userData').then(userData => {
                const body = requestDemoModal.iframeBody
                const form = body.find('.hs-form__pagination-content-container')
                form.contains(fieldLabel).click().type(userData[fieldLabel]);
            });
        });
        requestDemoModal.closeModalButton.click()
    });
});

