import { useRef } from 'react'
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Portfolio from './Portfolio/Portfolio'
import PageTopButton from './UI/PageTopButton/PageTopButton'

const App = props => {
    // State variables/Refs
    const portfolioTabRef = useRef(null)
    const contactTabRef = useRef(null)
    const blogTabRef = useRef(null)

    // Event handlers 
    const portfolioClickHandler = () => {
        if (portfolioTabRef.current) {
            portfolioTabRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
    }

    const contactClickHandler = () => {
        if (contactTabRef.current) {
            contactTabRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
    }

    const blogClickHandler = () => {
        if (blogTabRef.current) {
            blogTabRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
    }

    return (
        <>
            <Navigation eventHandlers={[portfolioClickHandler, contactClickHandler, blogClickHandler]} />
            <Header />
            <Portfolio 
                portRef={portfolioTabRef} contactTabRef={contactTabRef}
                blogTabRef={blogTabRef} />
            <PageTopButton />
        </>
    )
}

export default App