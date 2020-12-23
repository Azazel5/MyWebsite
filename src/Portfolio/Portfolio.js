const Portfolio = props => {
    const { portRef } = props

    return (
        <div className="portfolio-section" ref={portRef}>
            <h1 className="portfolio-section__heading">Portfolio</h1>
        </div>
    )
}

export default Portfolio