import { useContext, useEffect, useRef } from 'react'

import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Portfolio from './Portfolio/Portfolio'
import PageTopButton from './UI/PageTopButton/PageTopButton'
import { BlogFullscreenEnabled } from './Context/Context'

const App = props => {
    // State variables/Refs
    const portfolioTabRef = useRef(null)
    const contactTabRef = useRef(null)
    const blogTabRef = useRef(null)
    const blogFullScreenContext = useContext(BlogFullscreenEnabled)

    // Checks if the context's blog has any keys (such as blog_title, blog_content, etc). If so,
    // remove the body's scroll attribute. If not, the blog context is empty and the fullscreen
    // mode isn't activate - let the y position scroll automatically.

    useEffect(() => {
        if (Object.keys(blogFullScreenContext.blogFullScreen).length > 0)
            document.body.style.overflowY = 'hidden'
        else
            document.body.style.overflowY = 'auto'

    }, [blogFullScreenContext.blogFullScreen])

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