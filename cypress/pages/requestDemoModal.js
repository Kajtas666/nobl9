class RequestDemoModal {

    get iframe() {
        return cy.get('iframe[data-test-id="interactive-frame"]');
    }

    get iframeBody() {
        return this.iframe
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
                return cy.wrap($body)
            })
    }

    get closeModalButton() {
        return this.iframeBody.find('#interactive-close-button')
    }
}

module.exports = new RequestDemoModal()