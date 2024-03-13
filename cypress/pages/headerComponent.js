class Header {
    get header() {
        return cy.get("#header")
    }

    get resourcesButton() {
        return this.header.contains('Resources')
    }

    get blogButton() {
        return cy.contains('a','Nobl9 Blog')
    }

    get requestDemoButton() {
        return cy.contains('a', 'Request a Demo')
    }

}

module.exports = new Header()