describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should render a page title', () => {
    cy.get('.page-title')
  })

  it('should render a search form', () => {
    cy.get('.search-bar-form')
  })

  it('should render a sort/filter form', () => {
    cy.get('.sort-and-filter-section')
  })

  it('should display a message', () => {
    cy.get('.default-message')
  })

  it('should display repositories upon a user search', () => {
    cy.get('.search-bar-input').type('tetris')
    cy.get('.search-bar-button').click()
    cy.get('[href="/76954504"] > .repository-card')
  })

  it('should allow a user to sort repositories by stars', () => {
    cy.get('.search-bar-input').type('tetris')
    cy.get('.search-bar-button').click()
    cy.get('.sort-by-stars-button').click()
    cy.get('[href="/359161975"] > .repository-card')
  })

  it('should allow a user to sort repositories by best match', () => {
    cy.get('.search-bar-input').type('tetris')
    cy.get('.search-bar-button').click()
    cy.get('.sort-by-match-button').click()
    cy.get('[href="/2548674"] > .repository-card')
  })

  it('should allow a user to filter repositories by language', () => {
    cy.get('.search-bar-input').type('tetris')
    cy.get('.search-bar-button').click()
    cy.get('.language-input').type('javascript')
    cy.get('.language-filter-button').click()
    cy.get('[href="/19886948"] > .repository-card').click()
    cy.get('.repository-page > :nth-child(4)').should('contain', 'Language: JavaScript')
  })

  it('should show the user details about the repository after selecting', () => {
    cy.get('.search-bar-input').type('tetris')
    cy.get('.search-bar-button').click()
    cy.get('.language-input').type('javascript')
    cy.get('.language-filter-button').click()
    cy.get('[href="/19886948"] > .repository-card').click()
    cy.get('.repository-page')
  })

  it('should allow the user to return to the home page', () => {
    cy.get('.search-bar-input').type('tetris')
    cy.get('.search-bar-button').click()
    cy.get('.language-input').type('javascript')
    cy.get('.language-filter-button').click()
    cy.get('[href="/19886948"] > .repository-card').click()
    cy.get('.repository-page')
    cy.get('.return-to-search-button').click()
    cy.get('.page-title')
  })
})