const FloatingCard = props => {
    // props 
    const { cardTitle, mainContent, subContent, height } = props

    // inline styles
    const dimensions = { height: height }

    return (
        <div className="floating-card" style={dimensions}>
            <h2>{cardTitle}</h2>
            {mainContent}
            {subContent}
        </div>
    )
}

export default FloatingCard