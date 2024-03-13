class BlogPage {
    get blogIndex() {
        return cy.get('section.blog-index')
    }

    get latestBlogPost() {
        return this.blogIndex.first()
    }

    getLearnMoreButton(post) {
        return post.contains('a', 'Learn More')
    }
}

module.exports = new BlogPage();
