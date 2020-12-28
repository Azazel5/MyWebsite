import { useState } from 'react'

const Navigation = props => {
    // State variables
    const [navbarYPosition, setNavbarYPosition] = useState(0)

    // Props variables 
    const { eventHandlers } = props

    // inline styles 

    return (
        <nav className="navigation-bar">
            <ul className="navigation-container">
                <li className="navigation-container__col" onClick={eventHandlers[0]}>Portfolio</li>
                <li className="navigation-container__col" onClick={eventHandlers[1]}>Contact</li>
                <li className="navigation-container__col" onClick={eventHandlers[2]}>Blog</li>
            </ul>
        </nav>
    )
}

export default Navigation