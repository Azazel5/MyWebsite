const Navigation = props => {
    // Props variables 
    const { eventHandlers } = props

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