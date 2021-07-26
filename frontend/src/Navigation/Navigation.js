import { useEffect, useState, useRef } from 'react'

const Navigation = props => {
    // State variables 
    const [showNavbar, setShowNavbar] = useState(false)
    const navbarRef = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', windowScrollYListener)

        return () => {
            window.removeEventListener('scroll', windowScrollYListener);
        }
    }, [])

    // Props variables 
    const { eventHandlers } = props

    // Event listeners 
    const windowScrollYListener = () => {
        if (window.scrollY > (navbarRef.current.offsetTop + navbarRef.current.offsetHeight))
            setShowNavbar(true)
        else
            setShowNavbar(false)
    }

    // Inline Styles 
    const navbarStyle = { backgroundColor: showNavbar && 'white' }
    const navbarColumnStyle = ["navigation-container__col"]
    if (showNavbar)
        navbarColumnStyle.push("navigation-container__col--shown")

    return (
        <nav className="navigation-bar" ref={navbarRef} style={navbarStyle}>
            <ul className="navigation-container">
                <li className={navbarColumnStyle.join(" ")} onClick={eventHandlers[0]}>Portfolio</li>
                <li className={navbarColumnStyle.join(" ")} onClick={eventHandlers[2]}>Blog</li>
                <li className={navbarColumnStyle.join(" ")} onClick={eventHandlers[1]}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation