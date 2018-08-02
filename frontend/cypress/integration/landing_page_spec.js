import axios from 'axios'

const API_URL = Cypress.env('API_URL')
const FRONTEND_URL = Cypress.env('FRONTEND_URL')

describe('Todos', function() {
  beforeEach(() => {
    return axios.post(API_URL + '/todos', { description: 'Todo #1' })
  })

  it('Loads the app', function() {
    console.log('\n', 'Cypress.env()', Cypress.env());
    console.log('\n', 'FRONTEND_URL', FRONTEND_URL);
    console.log('\n', 'FRONTEND_URL', FRONTEND_URL);
    console.log('\n', 'FRONTEND_URL', FRONTEND_URL);
    console.log('\n', 'FRONTEND_URL', FRONTEND_URL);
    console.log('\n', 'FRONTEND_URL', FRONTEND_URL);
    console.log('\n', 'FRONTEND_URL', FRONTEND_URL);
    console.log('\n', 'FRONTEND_URL', FRONTEND_URL);
    cy.visit(FRONTEND_URL)

    cy.contains('Todo #1')
  })
})
