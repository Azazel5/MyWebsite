import React from 'react'

const Timeline = props => {
    // Props variables 
    const { timelineVariables } = props

    // Mapped/Reduced variables
    const timelineItems = Object.keys(timelineVariables).map(variable => (
        <React.Fragment key={timelineVariables[variable].text}>
            <span className="timeline-container__symbol">&#9830;</span>
            <div className="timeline-container__content">
                <div>{timelineVariables[variable].dates}</div>
                <h4>{timelineVariables[variable].text}</h4>
            </div>
        </React.Fragment>
    ))

    return (
        <div className="timeline-container">
            {timelineItems}
        </div>
    )
}

export default Timeline