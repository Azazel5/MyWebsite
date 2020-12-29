import Timeline from './Timeline/Timeline'

const FloatingCard = props => {
    // Timeline variables
    const timelineVariables = {
        "line1Text": "University of Minnesota - Twin Cities",
        "line1StartDate": "September 2018",
        "line2Text": "Ullens School",
        "line2StartDate": "August 2015",
        "line1EndDate": "September 2018",
        "line3Text": "Kendriya Vidyalaya Kathmandu",
        "line3StartDate": "April 2006",
        "line3EndDate": "March 2015"
    }

    return (
        <div className="floating-card">
            <h2>Intro</h2>
            <Timeline {...timelineVariables} />
            {/* <span className="floating-card__outer-span">Studied at <span>University of Minnesota - Twin Cities</span></span>
            <span className="floating-card__outer-span">Secondary education at <span>Ullens School and Kendriya Vidyalaya Kathmandu</span></span>
            <span className="floating-card__outer-span">Lives in <span>Nashua, New Hampshire</span></span>
            <span className="floating-card__outer-span">From <span>Kathmandu, Nepal</span></span>
            <div className="floating-card__content">
                <span>Tools I enjoy working with:</span>
            </div> */}
        </div>
    )
}

export default FloatingCard