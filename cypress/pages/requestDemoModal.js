class RequestDemoModal {

    getIframeDocument()  {
        return cy.get('iframe[data-test-id="interactive-frame"]').its('0.contentDocument').should('exist')

    }

    getIframeBody() {
        return this.getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }

    getFieldByLabel(label) {
        return this.getIframeDocument().contains('.container-fluid body-container form label', label).parent()
    }

    getInputField(label) {
        return this.getFieldByLabel(label).get('input')
    }


    get closeModalButton() {
        return cy.get('#interactive-close-button"')
    }
}

module.exports = new RequestDemoModal()