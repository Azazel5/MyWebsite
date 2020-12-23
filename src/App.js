import { useRef } from 'react'
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Portfolio from './Portfolio/Portfolio'

const App = props => {
    // State variables/Refs
    const portfolioTabRef = useRef(null)
    const contactTabRef = useRef(null)
    const blogTabRef = useRef(null)

    // Event handlers 
    const portfolioClickHandler = () => {
        if (portfolioTabRef.current) {
            portfolioTabRef.current.scrollIntoView({ block: 'start',  behavior: 'smooth' })
        }
    }

    const contactClickHandler = () => {
        console.log("contact() clicked");
    }

    const blogClickHandler = () => {
        console.log("Blog() clicked");
    }

    return (
        <>
            <Navigation eventHandlers={[portfolioClickHandler, contactClickHandler, blogClickHandler]} />
            <Header />
            <Portfolio portRef={portfolioTabRef} />
        </>
    )
}

export default App