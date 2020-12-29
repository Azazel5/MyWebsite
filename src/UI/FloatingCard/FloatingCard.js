const FloatingCard = props => {
    const { cardTitle, mainContent, subContent } = props

    return (
        <div className="floating-card">
            <h2>{cardTitle}</h2>
            {mainContent}
            {subContent}
        </div>
    )
}

export default FloatingCard