const Timeline = props => {
    // Props 
    const {
        line1Text, line1StartDate, line2Text, line2StartDate, line1EndDate,
        line3Text, line3StartDate, line3EndDate
    } = props

    return (
        <div className="timeline">
            <div className="timeline-container">
                <span className="timeline-container__symbol">&#9830;</span>
                <div className="timeline-container__content">
                    <div>Jan 15, 2020</div>
                    <h4>Massachussets Institute of Technology</h4>
                </div>
            </div>
        </div>
    )
}

export default Timeline