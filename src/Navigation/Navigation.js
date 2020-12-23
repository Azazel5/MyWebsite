const Navigation = props => {
    // Props variables 
    const { eventHandlers } = props

    return (
        <div className="navigation-bar">
            <div className="navigation-bar__col" onClick={eventHandlers[0]}>Portfolio</div>
            <div className="navigation-bar__col" onClick={eventHandlers[1]}>Contact</div>
            <div className="navigation-bar__col" onClick={eventHandlers[2]}>Blog</div>
        </div>
    )
}

export default Navigation