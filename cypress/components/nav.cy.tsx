import { Nav } from '@/app/components/Nav'

describe('<Nav />', () => {
    it('should render and display expected content', () => {
        cy.mount(<Nav />)
        cy.get('nav').should('exist')
    })
})