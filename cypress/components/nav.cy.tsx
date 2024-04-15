import { NavigationBar } from '@/components/NavigationBar'

describe('<Nav />', () => {
    it('should render and display expected content', () => {
        cy.mount(<NavigationBar />)
        cy.get('nav').should('exist')
    })
})